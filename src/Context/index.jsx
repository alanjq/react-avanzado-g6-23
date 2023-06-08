
import { createContext, useState } from 'react'

import useProducts from "../hooks/useProducts";


export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {
// Shopping cart: Increment quantity and 
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  

// Product List

const { products, isLoading, setPage } = useProducts()

  // //Open Close Product
  // const [isProductDetailOpen, setIsProductOpen] = useState(false);
  // const openProductDetail = () => setIsProductOpen(true)
  // const closeProductDetail = () => setIsProductOpen(false)

  // //Product Detail Show Product
  // const [productToShow, setProductToShow] = useState({});


  
  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      cartProducts, 
      setCartProducts,
      products, 
      isLoading, 
      setPage,
    }}>
      {children}
    </ShoppingCartContext.Provider>
    
  )
}
