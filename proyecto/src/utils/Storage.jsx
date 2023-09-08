/**
 * LOCAL STORAGE
 *
 * Local Storage almacena valores en el navegador para que los tengamos disponibles.
 * Los valores se guardan como strings
 * Estos valores no se borran aunque el usuario cierre el navegador.
 * Se borran hasta que los borremos nosotros o el usuario desde la configuración del navegador.
*/

export const setCartToLocalStorage = (cartItems) => {
    // Convertimos el objeto "cartItems" en un string que podamos almacenar en localStorage
    // Para eso usamos JSON.stringify()
    const value = JSON.stringify(cartItems)
    // Guardamos en local storage una clave (key) con el valor de la variable "cartItems"
    localStorage.setItem('cart', value)
}

/**
 * Obtenemos el valor de "cart" almacenado en el navegador
 * localStorage.cart
 *  */
export const getCartFromLocalStorage = () => {
    // Usamos JSON.parse para convertir el valor de "cart" (almacenado en localStorage) a un objeto JSON válido
    const value = JSON.parse(localStorage.getItem("cart"))

    // Verificamos que tengamos un Array válido guardado previamente
    if(Array.isArray(value)){
        return value;
    }

    // Si el valor guardado no es un array o no hay nada almacenado, devolvemos un array vacío
    return []
}
