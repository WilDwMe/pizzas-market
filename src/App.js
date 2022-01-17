import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { setPizzas } from './redux/actions/pizzas'
import { Header } from './components';
import { Home, Cart } from './pages';


class App extends React.Component {

  componentDidMount(){
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => this.props.setPizzas(data.pizzas));
  }


render(){
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
        <Route path='/' element={<Home items={this.props.items}/>} exact />
        <Route path='/cart' element={<Cart/>} exact />
        </Routes>
      </div>
    </div>    
  );
};
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)) // if same name, can be retruned just as object.
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
