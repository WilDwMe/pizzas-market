import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup} from '../components';
import  ItemBlock  from '../components/ItemsBlock';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas'

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, []);

  const onSelectCat = React.useCallback((index) => dispatch(setCategory(index)));

    return (
        <div className="container">
          <div className="content__top">
          <Categories onClickItem={(index) => onSelectCat}/>
          <SortPopup />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {items && items.map((item) => <ItemBlock 
          key={item.id} isLoaded={isLoaded} {...item}
          />)}  
          </div>
        </div>
    )
}

export default Home;