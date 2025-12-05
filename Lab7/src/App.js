import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

function App() {
  const goods = [
    {name: "Apple", price: 20, img: "https://img.icons8.com/color/96/apple.png" },
    {name: "Pear", price: 30, img: "https://img.icons8.com/color/96/pear.png" },
    {name: "Grapes", price: 45, img: "https://img.icons8.com/color/96/grapes.png" },
    {name: "Peach", price: 25, img: "https://img.icons8.com/color/96/peach.png" },
    {name: "Banana", price: 35, img: "https://img.icons8.com/color/96/banana.png" },
    {name: "Orange", price: 28, img: "https://img.icons8.com/color/96/orange.png" },
  ];

  return (
    <div className="App">
      <Header />
      <Content />
      <Image />
      <hr style={{ margin: '50px 0' }} />
      <h2>Goods Gallery</h2>
      <div className="goods-gallery">
        {goods.map(item => (
          <GoodsCard
            image={item.img} 
            name={item.name} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;