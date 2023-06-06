import { Grid } from "@mui/material";
import React, {useContext} from "react";
import AddProduct from "./AddProduct";
import { ShoppingCartContext } from "../Context";

export const ProductList = ({ products }) => {
    let isItemOnCart = false
    const context = useContext(ShoppingCartContext)
    console.log('lista de productos', products);
    return (<Grid item xs={8} display={"flow"}>
        {products.map((item, index) => <Grid key={index} display={"grid"}>
            <p>{item.title}</p>
            <img src={item.thumbnailUrl} />
            {isItemOnCart=context.cartProducts.find((item) => (item.id===context.cartProducts.id))}
            {isItemOnCart ? <span>Borrar</span> : <AddProduct item={item}/>}
        </Grid>
        )
        }
    </Grid>)
}

export default ProductList
