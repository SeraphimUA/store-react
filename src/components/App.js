import React, { useState } from 'react';
import './App.css';
import ProductsList from './ProductsList/ProductsList'
import Basket from './Basket/Basket';
import Total from './Total/Total';

const productItems = [{
  id: 1,
  title: "Чашка",
  price: 159,
  image: "https://prostomayki.com.ua/components/com_virtuemart/shop_image/product/105485_Chashka_s_arbuzom1546744202.jpg"
},{
  id: 2,
  title: "Футболка",
  price: 299,
  image: "https://maikoff.ua/uploaded/prints_spool/2/p1640l2436w240o80t1c1front0big-muzhskaya-futbolka-arbuz.jpg"
},{
  id: 3,
  title: "Кепка",
  price: 239,
  image: "https://content.rozetka.com.ua/goods/images/big/4537171.jpg"
},{
  id: 4,
  title: "Браслет",
  price: 249,
  image: "https://ds1.skrynya.ua/products/p879351_5b27ee4593d7f.jpg"
}];

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
      <h1>Store</h1>
      <ProductsList products={productItems} addProductInBasket={addProductInBasket} />
      <h1>Basket</h1>
      <Basket
        basket={basketState.basket}
        addProductInBasket={addProductInBasket} 
        reduceProductInBasket={reduceProductInBasket}
        removeProductFromBasket={removeProductFromBasket}
      />
      <Total basket={basketState.basket} />
    </div>
  );
}

export default App;
