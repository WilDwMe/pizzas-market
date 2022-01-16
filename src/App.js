import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

const  App = () => {

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
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </div>    
  );
};

export default App;
