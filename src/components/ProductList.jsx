import { Grid } from "@mui/material";
import React from "react";

export const ProductList = ({ products }) => {
    console.log('lista de productos', products);
    return (<Grid item xs={8} display={"flow"}>
        {products.map((item, index) => <Grid key={index} display={"grid"}>
            <p>{item.title}</p>
            <img src={item.thumbnailUrl} />
        </Grid>
        )
        }
    </Grid>)
}

export default ProductList
