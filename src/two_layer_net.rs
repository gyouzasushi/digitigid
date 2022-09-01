mod layers;
mod params;
use layers::*;
use ndarray::*;
use params::*;
struct Layers {
    affine_layer1: AffineLayer,
    relu_layer1: ReluLayer<Ix2>,
    affine_layer2: AffineLayer,
    relu_layer2: ReluLayer<Ix2>,
    softmax_layer: SoftmaxLayer,
}
pub struct TwoLayerNet {
    params: Params,
    layers: Layers,
}
impl TwoLayerNet {
    pub fn new() -> Self {
        let params = Params::new();
        let layers = Layers {
            affine_layer1: AffineLayer::new(&params.weight1, &params.bias1),
            relu_layer1: ReluLayer::new(),
            affine_layer2: AffineLayer::new(&params.weight2, &params.bias2),
            relu_layer2: ReluLayer::new(),
            softmax_layer: SoftmaxLayer::new(),
        };
        Self { params, layers }
    }
    pub fn predict(&mut self, data: &Array2<f64>) -> Array2<f64> {
        let data = self.layers.affine_layer1.forward(data);
        let data = self.layers.relu_layer1.forward(&data);
        let data = self.layers.affine_layer2.forward(&data);
        let data = self.layers.relu_layer2.forward(&data);
        let data = self.layers.softmax_layer.forward(&data);
        data
    }
}
