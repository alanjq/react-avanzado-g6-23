import { useContext } from 'react';

import {ShoppingCartContext} from '../Context'

import {ProductItem} from './ProductItem'

export const ProductList = () => {
    const context = useContext(ShoppingCartContext)

    return (<section className="grid grid-cols-4 gap-5">
        {context.products.map((product) => <ProductItem product={product} key={product.id} /> )}
    </section>)
}

export default ProductList
