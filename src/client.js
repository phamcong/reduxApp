"use strict";

// REACT
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// REACT-ROUTER
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// IMPORT COMBINED REDUCERS
import reducers from "./reducers/index";

// IMPORT ACTIONS
import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBooks, updateBooks } from "./actions/booksActions";

// STEP 1 create the store

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import BooksList from "./components/pages/booksList";
import Cart from "./components/pages/cart";
import BooksForm from "./components/pages/booksForm";
// import Menu from './components/menu';
// import Footer from './components/footer';
import Main from "./main";

const Routes = (
  	<Provider store={store}>
    	<Router history={browserHistory}>
      		<Route path="/" component={Main}>
        		<IndexRoute component={BooksList} />
        		<Route path="/admin" component={BooksForm} />
        		<Route path="/cart" component={Cart} />
      		</Route>
    	</Router>
  	</Provider>
);

render(Routes, document.getElementById("app"));
// STEP 2 create and dispatch actions
// store.dispatch(postBooks(
// ))

// // DELETE and item in an array
// store.dispatch(deleteBooks(
// 	{ id: 2 }
// ))

// // UPDATE and item in an array
// store.dispatch(updateBooks(
// 	{
// 		id: 1,
// 		title: 'this is the updated book title'
// 	}
// ))

//-->> CART ACTIONS
// ADD to cart
// store.dispatch(addToCart([{ id: 1 }]))
