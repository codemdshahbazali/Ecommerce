import { Route, Switch } from 'react-router-dom';
import './App.css';
import EcommerceLandingPage from './components/landingPage/EcommerceLandingPage';
import ProductCart from './components/cart/ProductCart';
// import ProductCart from './components/cartNew/cart/ProductCart';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/commonComponents/header/Navbar';
import Footer from './components/commonComponents/footer/Footer';
import ProductCategory from './components/productCategory/ProductCategory';

function App() {
  return (
    <div className='App'>
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
          <Footer />
        </Route>
        <Route exact path='/productDetails/:id'>
          <ProductDetails />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
