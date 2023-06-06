import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { useContext } from 'react';
import { ShoppingCartProvider } from '../Context';

// eslint-disable-next-line react/prop-types
const AddProduct = ({item}) => {
  const {listaArticulos, setListaArticulos} = useContext(ShoppingCartProvider)

  const handleAdd = () => {
    let lista = listaArticulos;
    lista.push(item)
    setListaArticulos(lista)
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button onClick={handleAdd} startDecorator={<Add />}>Agregar</Button>
    </Box>
  )
}

export default AddProduct
