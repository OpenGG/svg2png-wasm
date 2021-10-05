use tiny_skia::Pixmap;
use usvg::{fontdb::Database, FitTo, OptionsRef, Size, Tree};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone)]
pub struct Converter {
    fonts: Vec<Vec<u8>>,
    serif_family: Option<String>,
    sans_serif_family: Option<String>,
    cursive_family: Option<String>,
    fantasy_family: Option<String>,
    monospace_family: Option<String>,
}

#[wasm_bindgen]
impl Converter {
    #[wasm_bindgen(js_name = registerFont)]
    pub fn register_font(&mut self, font: &[u8]) {
        self.fonts.push(font.to_vec());
    }

    #[wasm_bindgen]
    pub fn convert(
        &self,
        svg: &str,
        scale: Option<f32>,
        width: Option<f64>,
        height: Option<f64>,
    ) -> Result<Vec<u8>, JsValue> {
        let fontdb = load_fonts(
            &self.fonts,
            self.serif_family.as_deref(),
            self.sans_serif_family.as_deref(),
            self.cursive_family.as_deref(),
            self.fantasy_family.as_deref(),
            self.monospace_family.as_deref(),
        );
        let svg_options = OptionsRef {
            resources_dir: None,
            dpi: 96.0,
            font_family: "sans-serif",
            font_size: 12.0,
            languages: &["en".to_string()],
            shape_rendering: usvg::ShapeRendering::GeometricPrecision,
            text_rendering: usvg::TextRendering::OptimizeLegibility,
            image_rendering: usvg::ImageRendering::OptimizeQuality,
            keep_named_groups: false,
            default_size: Size::new(width.unwrap_or(100.0), height.unwrap_or(100.0))
                .ok_or_else(|| JsValue::from_str("Invalid width or height"))?,
            fontdb: &fontdb,
        };
        let scale = scale.unwrap_or(1.0);
        let tree =
            Tree::from_str(svg, &svg_options).map_err(|e| JsValue::from_str(&e.to_string()))?;
        let pixmap_size = tree.svg_node().size;

        let mut pixmap = Pixmap::new(
            (width.unwrap_or_else(|| pixmap_size.width()) * (scale as f64)).ceil() as u32,
            (height.unwrap_or_else(|| pixmap_size.height()) * (scale as f64)).ceil() as u32,
        )
        .ok_or_else(|| JsValue::from_str("Invalid width or height"))?;

        resvg::render(&tree, FitTo::Zoom(scale), pixmap.as_mut());
        pixmap
            .encode_png()
            .map_err(|e| JsValue::from_str(&e.to_string()))
    }
}

#[wasm_bindgen(js_name = createConverter)]
pub fn create_converter(
    default_serif_family: Option<String>,
    default_sans_serif_family: Option<String>,
    default_cursive_family: Option<String>,
    default_fantasy_family: Option<String>,
    default_monospace_family: Option<String>,
) -> Converter {
    Converter {
        fonts: Vec::new(),
        serif_family: default_serif_family,
        sans_serif_family: default_sans_serif_family,
        cursive_family: default_cursive_family,
        fantasy_family: default_fantasy_family,
        monospace_family: default_monospace_family,
    }
}

pub fn load_fonts(
    fonts: &[Vec<u8>],
    default_serif_family: Option<&str>,
    default_sans_serif_family: Option<&str>,
    default_cursive_family: Option<&str>,
    default_fantasy_family: Option<&str>,
    default_monospace_family: Option<&str>,
) -> Database {
    let mut db = Database::new();
    for font in fonts {
        db.load_font_data(font.to_vec());
    }
    if let Some(f) = default_serif_family {
        db.set_serif_family(f.to_string())
    }
    if let Some(f) = default_sans_serif_family {
        db.set_sans_serif_family(f.to_string())
    }
    if let Some(f) = default_cursive_family {
        db.set_cursive_family(f.to_string())
    }
    if let Some(f) = default_fantasy_family {
        db.set_fantasy_family(f.to_string())
    }
    if let Some(f) = default_monospace_family {
        db.set_monospace_family(f.to_string())
    }
    db
}
