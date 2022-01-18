import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
 
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
