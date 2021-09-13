import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import{setProductsData} from "../../actions/products";
import ProductsList from "../ProductsList/products";

const HomePage = () => {
    const getUserToken = (state) => state.userData.user;
    const getprods = (state) => state.products;

    const token = useSelector(getUserToken);
    const products = useSelector(getprods)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(token)
        dispatch(setProductsData(dispatch))
    },[])
    useEffect(()=>{
        console.log("products  , ", products)
    },[products])
    return (
        <div>
            Hello
            <ProductsList />
        </div>
    )
}
export default HomePage;