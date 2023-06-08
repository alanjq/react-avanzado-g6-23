
import { createContext, useEffect, useState } from 'react'

import useProducts from "../hooks/useProducts";
import { getCartFromLocalStorage, setCartToLocalStorage } from '../utils/Storage';


export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {

  // Usamos getCartFromLocalStorage para obtener los productos almacenados
  const [cartProducts, setCartProducts] = useState(getCartFromLocalStorage());


  // Acciones para cuando el valor de cartProducts cambie
  useEffect(() => {
    // Guardar a LocalStorage los objetos actuales en el carrito
    setCartToLocalStorage(cartProducts)
  }, [cartProducts])
  // Product List


  const { products, isLoading, setPage } = useProducts()


  return (
    <ShoppingCartContext.Provider value={{
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
