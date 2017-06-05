"use strict"
import {createStore} from 'redux';

// STEP 3 define reducers
const reducer = function(state=0, action){
  switch(action.type){
    case "INCREMENT":
      return state + action.payload;
      break;
    case "DECREMENT":
      return state - 1;
      break
  }
  return state
}

// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(function(){
  console.log('current state is: ', store.getState());
  console.log('current price: ', store.getState().price);
})
// STEP 2 create and dispatch actions
store.dispatch({type: "INCREMENT", payload: 1});
store.dispatch({type: "INCREMENT", payload: 1});
store.dispatch({type: "DECREMENT"});
store.dispatch({type: "DECREMENT"});
})
