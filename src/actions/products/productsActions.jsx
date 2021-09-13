import {GET_PRODUCTS_DATA, ADD_PRODUCT, SET_PRODUCTS_DATA } from "./products.types";
import {productsApis} from "../../containers/ProductsList/productsApi"


export const setProductsData = (prods) => (dispatch) => {
    console.log(" inside action ", prods)
    productsApis.getProducts(dispatch)

  };
  
  export const getPrpductsData = (prods) => (dispatch) => {
    dispatch({
      type: GET_PRODUCTS_DATA,
      payload: prods
    });
  };
  