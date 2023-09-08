import { useContext } from 'react';

import LinearProgress from '@mui/joy/LinearProgress';
import ProductList from "../components/ProductList";
import {ShoppingCartContext} from '../Context'
// import useProducts from "../hooks/useProducts";


export const LandingPage = () => {
    const { isLoading, setPage } = useContext(ShoppingCartContext)

    return (<div>
        <div className='w-1/4 px-4 py-2'>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Página
            </label>
            <div className="mt-2 mb-4">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    placeholder="you@example.com"
                    defaultValue={0} onChange={setPage}
                />
            </div>
        </div>
        {isLoading ? <LinearProgress /> : <ProductList />}
    </div>)
}

export default LandingPage
