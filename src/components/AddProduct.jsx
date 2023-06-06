import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';

// eslint-disable-next-line react/prop-types
const AddProduct = ({item}) => {
  const {cartProducts, setCartProducts} = useContext(ShoppingCartContext)

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
