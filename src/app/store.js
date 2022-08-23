import { createStore } from "redux";
import { useLocation } from "react-router";

const initalStateValue = {
  prName: localStorage.getItem('prName'),
  prPrice: parseFloat(localStorage.getItem('prPrice')),
  prQuantity: parseFloat(localStorage.getItem('prQuantity')),
  totalPrice: parseFloat(localStorage.getItem('prPrice')),
}



const qtyReducer = (state = initalStateValue, action) => {
  if (action.type === 'incQty') {
    return {
      ...state,
      prQuantity: action.prQuantity + 1,
      totalPrice: parseFloat(state.totalPrice) + action.prPrice,
      addToCart: action.addToCart
    }
    
  };

  if (action.type === 'decQty') {
    return {
      ...state,
      prQuantity: action.prQuantity - 1,
      totalPrice: parseFloat(state.totalPrice) - action.prPrice,
      addToCart: action.addToCart
    }
  };

  if (action.type === 'wishlist') {
    return {
      ...state,
      wishlist: {
        prName: action.prName,
        prPrice: action.prPrice,
        prCtName: action.prCtName,
        prCtSlug: action.prCtSlug,
        product: action.product,
        category: action.category,
      }
    }
  }

  if (action.type === 'addToCart') {
    return {
      ...state,
      prCtName: action.prCtName,
      prCtSlug: action.prCtSlug,
      product: action.product,
      category: action.category,
      addToCart: action.addToCart
    }
  };
  return state;
};

const store = createStore(qtyReducer);

export default store;