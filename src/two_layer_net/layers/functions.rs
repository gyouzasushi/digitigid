use ndarray::*;

pub fn softmax(x: &Array2<f64>) -> Array2<f64> {
    let max = x.fold_axis(Axis(1), f64::NAN, |a, b| b.max(*a));
    let max = Array::from_shape_fn(x.dim(), |(i, _)| max[[i]]);
    let x = x - &max;
    let x = x.mapv(f64::exp);
    let sum = x.sum_axis(Axis(1));
    let sum = Array::from_shape_fn(x.dim(), |(i, _)| sum[[i]]);
    x / sum
}

pub fn relu(x: f64) -> f64 {
    x.max(0.0)
}
