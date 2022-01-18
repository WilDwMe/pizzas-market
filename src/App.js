import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setPizzas } from './redux/actions/pizzas'
import { Header } from './components';
import { Home, Cart } from './pages';


const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => dispatch(setPizzas(data.pizzas)));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
        <Route path='/' element={ <Home/> } exact />
        <Route path='/cart' element={ <Cart/> } exact />
        </Routes>
      </div>
    </div>    
  );
};

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)) // if same name, can be retruned just as object.
//     };
//   };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
