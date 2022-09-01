mod functions;
use functions::*;
use ndarray::*;
pub trait Layer {
    type T;
    type U;
    fn forward(&mut self, x: &Self::T) -> Self::U;
    fn backword(&mut self, dout: &Self::U) -> Self::T;
}

pub struct ReluLayer<D>
where
    D: ndarray::Dimension,
{
    mask: Option<Array<f64, D>>,
}
impl<D> ReluLayer<D>
where
    D: ndarray::Dimension,
{
    pub fn new() -> Self {
        Self { mask: None }
    }
}
impl<D> Default for ReluLayer<D>
where
    D: ndarray::Dimension,
{
    fn default() -> Self {
        Self::new()
    }
}

impl<D> Layer for ReluLayer<D>
where
    D: ndarray::Dimension,
{
    type T = Array<f64, D>;
    type U = Array<f64, D>;

    fn forward(&mut self, x: &Self::T) -> Self::U {
        self.mask = Some(x.map(|&x| if x <= 0.0 { 0.0 } else { 1.0 }));
        x.mapv(relu)
    }
    fn backword(&mut self, dout: &Self::U) -> Self::T {
        dout.clone() * self.mask.as_ref().unwrap()
    }
}

pub struct AffineLayer {
    pub weight: Array2<f64>,
    pub bias: Array1<f64>,
    pub dw: Option<Array2<f64>>,
    pub db: Option<Array1<f64>>,
    x: Option<Array2<f64>>,
}
impl AffineLayer {
    pub fn new(weight: &Array2<f64>, bias: &Array1<f64>) -> Self {
        Self {
            weight: weight.clone(),
            bias: bias.clone(),
            dw: None,
            db: None,
            x: None,
        }
    }
}

impl Layer for AffineLayer {
    type T = Array2<f64>;
    type U = Array2<f64>;
    fn forward(&mut self, x: &Self::T) -> Self::U {
        self.x = Some(x.clone());
        x.dot(&self.weight) + &self.bias
    }
    fn backword(&mut self, dout: &Self::U) -> Self::T {
        self.dw = Some(self.x.as_ref().unwrap().t().dot(dout));
        self.db = Some(dout.sum_axis(Axis(0)));

        dout.dot(&self.weight.t())
    }
}

pub struct SoftmaxLayer {
    y: Option<Array2<f64>>,
}
impl SoftmaxLayer {
    pub fn new() -> Self {
        Self { y: None }
    }
}
impl Default for SoftmaxLayer {
    fn default() -> Self {
        Self::new()
    }
}

impl Layer for SoftmaxLayer {
    type T = Array2<f64>;
    type U = Array2<f64>;
    fn forward(&mut self, x: &Self::T) -> Self::U {
        self.y = Some(softmax(&x));
        self.y.clone().unwrap()
    }
    fn backword(&mut self, _dout: &Self::U) -> Self::T {
        _dout.clone()
    }
}
