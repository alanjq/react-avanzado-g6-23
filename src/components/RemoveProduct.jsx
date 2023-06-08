import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';

// eslint-disable-next-line react/prop-types
const RemoveProduct = ({item}) => {
  const context = useContext(ShoppingCartContext)

  const handleRemove = () => {
    const filteredProducts = context.cartProducts.filter(product => product.id!= item.id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }


  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button variant="outlined" color="danger" onClick={handleRemove} ><RemoveIcon /></Button>
    </Box>
  )
}

export default RemoveProduct
