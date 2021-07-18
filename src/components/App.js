import React from 'react';
import './App.css';
import ProductsList from './ProductsList/ProductsList'
import Basket from './Basket/Basket';

const productItems = [{
  id: 1,
  title: "Чашка",
  price: 159,
  image: "https://prostomayki.com.ua/components/com_virtuemart/shop_image/product/105485_Chashka_s_arbuzom1546744202.jpg",
  is_inBasket: false,
},{
  id: 2,
  title: "Футболка",
  price: 299,
  image: "https://maikoff.ua/uploaded/prints_spool/2/p1640l2436w240o80t1c1front0big-muzhskaya-futbolka-arbuz.jpg",
  is_inBasket: false,
},{
  id: 3,
  title: "Кепка",
  price: 239,
  image: "https://content.rozetka.com.ua/goods/images/big/4537171.jpg",
  is_inBasket: false,
},{
  id: 4,
  title: "Браслет",
  price: 249,
  image: "https://ds1.skrynya.ua/products/p879351_5b27ee4593d7f.jpg",
  is_inBasket: false,
}];

const basketItems = [];

function buyProduct(props) {
  
}

function App() {
  return (
    <div className="App">
      <h1>Store</h1>
      <ProductsList data={productItems} />
      <h1>Basket</h1>
      <Basket data={productItems} />
    </div>
  );
}

export default App;
