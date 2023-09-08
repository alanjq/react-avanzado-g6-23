import React from "react";
import LinearProgress from '@mui/joy/LinearProgress';
import { useQuery, gql } from "@apollo/client";
import { Alert } from "@mui/material";


export const ProductPage = () => {
    // Definimos la consulta GraphQL
    const QUERY_PRODUCTS = gql`
    query query_products {
        allProducts {
          description
          id
          name
          price
          category {
            name
            id
            slug
          }
          picture {
            url
          }
        }
      }
    `;

    // Llamar a la consulta
    const { loading, error, data } = useQuery(QUERY_PRODUCTS)

    // Renderizamos el loader mientras trae la información
    if (loading) {
        return <LinearProgress />
    }

    // Mostramos un mensaje de error
    if (error) {
        return <div className="my-6">
            <Alert severity="error">This is an error alert — check it out!</Alert>
        </div>
    }

    return <div className="grid grid-cols-4 gap-3">
        {data.allProducts.map((product, i) => (
            <article key={i}>
                <p>{product.name}</p>
                <img src={product.picture.url} className="max-w-24 max-h-20" />
            </article>
        ))}
    </div>
}

export default ProductPage
