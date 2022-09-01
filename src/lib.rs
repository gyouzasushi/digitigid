mod two_layer_net;
use ndarray::*;
use two_layer_net::TwoLayerNet;
use wasm_bindgen::prelude::*;

const N: usize = 28;
#[wasm_bindgen]
pub fn predict(data: Vec<i32>) -> String {
    let data = parse(&data);
    let mut network = TwoLayerNet::new();
    let label = network.predict(&data).index_axis(Axis(0), 0).to_vec();
    label
        .iter()
        .map(|v| v.to_string())
        .collect::<Vec<_>>()
        .join("$")
}

fn parse(data: &Vec<i32>) -> Array2<f64> {
    let d = {
        let dd = data.len() / (N * N);
        let mut d = 0;
        while d * d < dd {
            d += 1;
        }
        d
    };
    let mut count = vec![vec![0f64; N]; N];
    for (i, &v) in data.iter().enumerate() {
        count[i / (N * d) / d][i % (N * d) / d] += v as f64;
    }
    Array::from_shape_vec((1, N * N), count.into_iter().flatten().collect::<Vec<_>>()).unwrap()
}
