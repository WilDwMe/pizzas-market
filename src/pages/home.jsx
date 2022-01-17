import React, {useEffect} from 'react'
import { Categories, SortPopup, ItemBlock } from '../components';

const Home = ({items}) => {
    const state = {
        categories: [
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые'
        ],
        sortItem: [
          { name: 'популярности', type: 'popular'},
          {name: 'цене', type: 'price'},
          {name: 'алфавиту', type: 'alphabet'}
        ]
      }

    return (
        <div className="container">
          <div className="content__top">
          <Categories items={state.categories} onClickItem={(item) => console.log(item)}/>
          <SortPopup items={state.sortItem}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {items.map((item) => <ItemBlock 
          key={item.id} {...item}
          />)}  
          </div>
        </div>
    )
}

export default Home;