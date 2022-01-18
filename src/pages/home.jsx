import React from 'react';
import { useSelector } from 'react-redux';
import { Categories, SortPopup, ItemBlock } from '../components';

const Home = () => {
  const items = useSelector(({pizzas}) => pizzas.items);
  
    return (
        <div className="container">
          <div className="content__top">
          <Categories onClickItem={(item) => console.log(item)}/>
          <SortPopup />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {items && items.map((item) => <ItemBlock 
          key={item.id} {...item}
          />)}  
          </div>
        </div>
    )
}

export default Home;