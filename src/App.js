import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import EcommerceLandingPage from './components/landingPage/EcommerceLandingPage';
import ProductCart from './components/cart/ProductCart';
// import ProductCart from './components/cartNew/cart/ProductCart';
import ProductDetails from './components/ProductDetails';
import store from './redux/store';
import Navbar from './components/commonComponents/header/Navbar';
import Footer from './components/commonComponents/footer/Footer';
import ProductCategory from './components/productCategory/ProductCategory';
import ImageCarousel from './components/singleProduct/SingleProductPage';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <EcommerceLandingPage />
            <Footer />
          </Route>
          <Route exact path='/cart'>
            <ProductCart />
          </Route>
          <Route exact path='/category/:category'>
            <ProductCategory />
          </Route>
          <Route exact path='/productDetails/:id'>
            <ProductDetails />
            {/* <ImageCarousel /> */}
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
