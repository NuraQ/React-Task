
import axios from "axios";
import {SET_PRODUCTS_DATA} from "../../actions/products"

export const productsApis = {
     getProducts: (dispatch) => {
        axios.get("https://reqres.in/api/users?page=2")
        .then((res) => {
            console.log(res.data.data)
            dispatch({
                type: SET_PRODUCTS_DATA,
                payload: res.data.data
              });
        })
        .catch(err => {
            console.log(err)

        })
    }
}