
import axios from "axios";
import {SET_PRODUCTS_DATA} from "../../actions/products"

export const productsApis = {
     getProducts: (dispatch) => {
        axios.get("https://reqres.in/api/unknown")
        .then((res) => {
            console.log(res)
            // dispatch({
            //     type: SET_PRODUCTS_DATA,
            //     payload: res.data
            //   });
        })
        .catch(err => {
            console.log(err)

        })
    }
}