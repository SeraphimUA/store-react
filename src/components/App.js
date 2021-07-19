import { productItems } from '../productsArray';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import ProductsList from './ProductsList/ProductsList'
import Basket from './Basket/Basket';
import Total from './Total/Total';
import NavMenu from './NavMenu/NavMenu';
import ProductCard from './ProductCard/ProductCard';
import ProductDescr from './ProductDescr/ProductDescr';

const updateBasket = (basket, newProduct, index) => {
  // if count === 0 then remove product from basket
  if (newProduct.count === 0) {
    return [...basket.slice(0, index), ...basket.slice(index + 1)];
  }

  // if index === -1 then add product in basket
  if (index === -1) {
    return [...basket, newProduct];
  }

  return [...basket.slice(0, index), newProduct, ...basket.slice(index + 1)];
};

const updateProduct = (getProduct, productInCard, quantity) => {
  if (productInCard) {
    return {
      ...productInCard,
      totalPrice: productInCard.totalPrice + quantity * getProduct.price,
      count: productInCard.count + quantity
    };
  }

  return {
    id: getProduct.id,
    title: getProduct.title,
    image: getProduct.image,
    totalPrice: getProduct.price,
    count: 1
  };
};

function App() {
  const [basketState, setBasketState] = useState({ basket: [] });

  const addProductInBasket = (id) => {
    setBasketState(() => {
      const getProduct = productItems.find((product) => product.id === id);
      const getProductIndex = basketState.basket.findIndex(
        (product) => product.id === id
      );
      const productInCard = basketState.basket[getProductIndex];

      const newProduct = updateProduct(getProduct, productInCard, 1);
      const newArray = updateBasket(
        basketState.basket,
        newProduct,
        getProductIndex
      );

      return {
        basket: newArray
      };
    });
  };

  const reduceProductInBasket = (id) => {
    setBasketState(() => {
      const getProduct = productItems.find((product) => product.id === id);
      const getProductIndex = basketState.basket.findIndex(
        (product) => product.id === id
      );
      const productInCard = basketState.basket[getProductIndex];

      const newProduct = updateProduct(getProduct, productInCard, -1);
      const newArray = updateBasket(
        basketState.basket,
        newProduct,
        getProductIndex
      );

      return {
        basket: newArray
      };
    });
  };

  const removeProductFromBasket = (id) => {
    setBasketState(() => {
      const getProduct = productItems.find((product) => product.id === id);
      const getProductIndex = basketState.basket.findIndex(
        (product) => product.id === id
      );
      const productInCard = basketState.basket[getProductIndex];

      const newProduct = updateProduct(getProduct, productInCard, -productInCard.count);
      const newArray = updateBasket(
        basketState.basket,
        newProduct,
        getProductIndex
      );

      return {
        basket: newArray
      };
    });
  }

  return (
    <div className="App">
      <Router>
        <div>
          <NavMenu />
          <Switch>
            <Route exact path="/" children={() => {
              return (<>
                <h1>Магазин</h1>
                <ProductsList products={productItems} addProductInBasket={addProductInBasket} />
              </>)
            }} />
            <Route path="/basket" children={() => {
              return (
                <>
                  <h1>Корзина</h1>
                  <Basket
                    basket={basketState.basket}
                    addProductInBasket={addProductInBasket} 
                    reduceProductInBasket={reduceProductInBasket}
                    removeProductFromBasket={removeProductFromBasket}
                  />
                  <Total basket={basketState.basket} />
                </>
              )
            }} />
            <Route path="/products/:id(\d+)" component={ProductDescr} />
            <Route children={() => <h2>Not found</h2>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
