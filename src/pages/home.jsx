import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup} from '../components';
import  ItemBlock  from '../components/ItemsBlock';
import { Loader } from '../components/ItemsBlock/itemsPlacehold';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addItemToCart } from '../redux/actions/cart';

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const sortIems = [
  { name: 'популярности', type: 'popular', order: 'desc'},
  { name: 'цене', type: 'price', order: 'asc'},
  { name: 'алфавит', type: 'name', order: 'asc'},
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const { sortBy, category } = useSelector(({filter}) => filter);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  },[]);

  const onAddItem = React.useCallback((item) => {
    console.log(item);
    // dispatch(addItemToCart(item));
  },[])

    return (
        <div className="container">
          <div className="content__top">
          <Categories 
          activeCategory={category} 
          items={categories} 
          onClickCategory={onSelectCategory}/>
          <SortPopup 
          items={sortIems} 
          activeSortType={sortBy.type}
          onClickSortType={onSelectSortType}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {isLoaded 
          ? items.map((item) => 
          <ItemBlock
          onAddItem={(item) => onAddItem(item)} 
          key={item.id} 
          isLoaded={isLoaded}
          {...item}/>) 
          :  Array(10).fill(0).map((_, index) => (<Loader key={index}/>))}
          </div>
        </div>
    )
}

export default Home;