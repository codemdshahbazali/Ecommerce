import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import EcommerceLandingPage from './components/landingPage/EcommerceLandingPage';
import EommerceHeader from './components/EommerceHeader';
import ProductCart from './components/cart/ProductCart';
import ProductDetails from './components/ProductDetails';
import store from './redux/store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <EommerceHeader />
        <Switch>
          <Route exact path='/'>
            <EcommerceLandingPage />
          </Route>
          <Route exact path='/cart'>
            <ProductCart />
          </Route>
          <Route path='/:id'>
            <ProductDetails />
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
