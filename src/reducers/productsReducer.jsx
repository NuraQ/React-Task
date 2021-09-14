import {
    GET_PRODUCTS_DATA,
    ADD_PRODUCT
  } from "../actions/products";

  
  const initialProductsState = {
    products: [] 
  };
  
  const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return { ...state, products: action.payload };
      case GET_PRODUCTS_DATA:
        return { ...state, products:  [...state.products, action.newItem] };
      default:
        return state;
    }
  };
  
  export { initialProductsState, productsReducer };
  