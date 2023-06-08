
import { createContext, useEffect, useState } from 'react'

import useProducts from "../hooks/useProducts";
import { getCartFromLocalStorage, setCartToLocalStorage } from '../utils/Storage';


export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  // Shopping cart: Increment quantity and
  const [count, setCount] = useState(0);

  // Usamos getCartFromLocalStorage para obtener los productos almacenados
  const [cartProducts, setCartProducts] = useState(getCartFromLocalStorage());


  // Acciones para cuando el valor de cartProducts cambie
  useEffect(() => {
    // Guardar a LocalStorage los objetos actuales en el carrito
    setCartToLocalStorage(cartProducts)
  }, [cartProducts])
  // Product List


  const { products, isLoading, setPage } = useProducts()

  // //Open Close Product
  // const [isProductDetailOpen, setIsProductOpen] = useState(false);
  // const openProductDetail = () => setIsProductOpen(true)
  // const closeProductDetail = () => setIsProductOpen(false)

  // //Product Detail Show Product
  // const [productToShow, setProductToShow] = useState({});



  return (
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
