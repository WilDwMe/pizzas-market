import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Header } from './components';
import { Home, Cart } from './pages';

const  App = () => {

const [items, setItems] = useState([]);


useEffect(() => {
  axios.get('http://localhost:3000/db.json')
  .then(({data}) => setItems(data.pizzas));
},[]);



  const state = {
    categories: [
      'Мясные',
      'Вегетарианская',
      'Гриль',
      'Острые',
      'Закрытые'
    ],
    sortItem: [
      'популярности',
      'цене',
      'алфавиту'
    ]
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
        <Route path='/' element={<Home items={items}/>} exact />
        <Route path='/cart' element={<Cart/>} exact />
        </Routes>
      </div>
    </div>    
  );
};

export default App;
