// Guardar carrito en LocalStorage
export const setCartToLocalStorage = (cartItems) => {
    localStorage.cart = JSON.stringify(cartItems)
}

// Recuperar Item de LocalStorage
export const getCartFromLocalStorage = () => JSON.parse(localStorage.cart)
