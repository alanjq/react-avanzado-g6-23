import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { useContext } from 'react';
<<<<<<< HEAD
import { ShoppingCartProvider } from '../Context';

// eslint-disable-next-line react/prop-types
const AddProduct = ({item}) => {
  const {listaArticulos, setListaArticulos} = useContext(ShoppingCartProvider)
=======
import { ShoppingCartContext } from '../Context';

// eslint-disable-next-line react/prop-types
const AddProduct = ({item}) => {
  const {cartProducts, setCartProducts} = useContext(ShoppingCartContext)
>>>>>>> 85cd813d7c4eb4be5c9cedeef4b683ed19448ba5

  const handleAdd = () => {
    let lista = cartProducts;
    setCartProducts([...lista, item])
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button onClick={handleAdd} startDecorator={<Add />}>Agregar</Button>
    </Box>
  )
}

export default AddProduct
