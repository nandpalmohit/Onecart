import { createStore } from "redux";

var colorName = localStorage.getItem("colorName");

const qtyReducer = (state, action) => {
  if(action.type === 'incQty') {
    
  };
  return state
};

const store = createStore(qtyReducer);

export default store;