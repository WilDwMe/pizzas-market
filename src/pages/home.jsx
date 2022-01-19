import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup} from '../components';
import  ItemBlock  from '../components/ItemsBlock';
import { Loader } from '../components/ItemsBlock/itemsPlacehold';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const { sortBy, category } = useSelector(({filter}) => filter);

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [category]);

  const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

    return (
        <div className="container">
          <div className="content__top">
          <Categories activeCategory={category} items={categories} onClickCategory={onSelectCategory}/>
          <SortPopup />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoaded ? items.map((item) => <ItemBlock 
          key={item.id} isLoaded={isLoaded} {...item}
          />) :  Array(10).fill(0).map((_, index) => (<Loader key={index}/>))}
          </div>
        </div>
    )
}

export default Home;