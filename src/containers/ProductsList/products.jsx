
import Product from "./product/productItem"
import React from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { useGridStyles } from "./products.style";

// import { productItem } from "./product/productItem.jsx"

export const ProductsList = (props) => {
    const classes = useGridStyles();
    const getProducts = state => state.products
    const products = useSelector(getProducts)

    return (
        <div container className={classes.root}>
            <Grid container spacing={3}>
                {products.products.map((item, index) => {
                    return (
                        <Product key ={ item.key} element = {item}/>
                    );
                })}
            </Grid>
        </div>
    );
};
export default ProductsList