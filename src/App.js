import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail'
import About from './components/About';
import Contact from './components/Contact';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Product} />
          <Route exact path='/products/:id' component={ProductDetail} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/cartPage' component={CartPage} /> 
          <Route exact path='/checkout' component={Checkout} /> 
      </Switch>
      <Footer />
    </>
  );
}

export default App;
