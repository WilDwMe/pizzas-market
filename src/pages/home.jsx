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
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const { sortBy, category } = useSelector(({filter}) => filter);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy, dispatch]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  },[dispatch]);

  const onAddItemCart = React.useCallback((item) => {
    dispatch(addItemToCart(item));
  },[dispatch])

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
          onAddItem={(item) => onAddItemCart(item)} 
          key={item.id}
          addedCount={cartItems[item.id] && cartItems[item.id].items.length}
          isLoaded={isLoaded}
          {...item}/>) 
          :  Array(10).fill(0).map((_, index) => (<Loader key={index}/>))}
          </div>
        </div>
    )
}

export default Home;