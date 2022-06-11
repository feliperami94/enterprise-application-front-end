import * as React from 'react';
import { productType, putProduct } from '../features/productslice';
import { useSelector } from 'react-redux';
import { selectProviderState } from '../features/providerSlice'; 
import { useAppDispatch } from '../app/store';

interface IProductProps {
    product: productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  const providerState = useSelector(selectProviderState())
  const provider = providerState.filter(provider => provider.providerId === product.providerId)[0];
  const providersName = provider.providerName;
  const dispatch = useAppDispatch()


  const [editState, setEditState] = React.useState(false);
  const [editName, setEditName] = React.useState(product.productName);
  const [editDescription, setEditDescription] = React.useState(product.description);
  const [editPrice, setEditPrice] = React.useState(product.productPrice);
  const [editQuantity, setEditQuantity] = React.useState(product.productQuantity);
  const [editMin, setEditMin] = React.useState(product.minQuantity);
  const [editMax, setEditMax] = React.useState(product.maxQuantity);
  const [editProvider, setEditProvider] = React.useState(product.providerId);

  const commitProductEdition = async(product: productType) => {
    if(editName && editDescription && editQuantity && editPrice && editMin && editMax && editProvider){
      const editedProduct: productType = { productId: product.productId, 
      productName: editName,
      description: editDescription,
      productQuantity: editQuantity,
      productPrice: editPrice,
      minQuantity: editMin,
      maxQuantity: editMax,
      providerId: editProvider}
      dispatch(putProduct(editedProduct))
      setEditState(false)
    }
  }





  return (
    <>
      {editState === false?
    <tr>
      <td className='p-3 '>{product.productName}</td>
      <td className='p-3 '>{product.description}</td>
      <td className='p-3 '>{product.productPrice}</td>
      <td className='p-3 '>{product.productQuantity}</td>
      <td className='p-3 '>{product.minQuantity}</td>
      <td className='p-3 '>{product.maxQuantity}</td>
      <td className='p-3 '>{providersName}</td>
      <td className='p-6 '><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded' onClick={e => setEditState(true)}>Edit</button></td>
    </tr>
      :
    <tr>
    <td><input type="text" className='border-2 border-amber-500 rounded-md' value={editName} onChange={e=>setEditName(e.target.value)}/></td>
    <td><input type="text" className='border-2 border-amber-500 rounded-md'value={editDescription} onChange={e=>setEditDescription(e.target.value)}/></td>
    <td><input type="number" className='border-2 border-amber-500 rounded-md' value={editPrice} onChange={e=>setEditPrice(Number(e.target.value))}/></td>
    <td><input type="number" className='border-2 border-amber-500 rounded-md'value={editQuantity} onChange={e=>setEditQuantity(Number(e.target.value))}/></td>
    <td><input type="number" className='border-2 border-amber-500 rounded-md'value={editMin} onChange={e=>setEditMin(Number(e.target.value))}/></td>
    <td><input type="number" className='border-2 border-amber-500 rounded-md'value={editMax} onChange={e=>setEditMax(Number(e.target.value))}/></td>
    <td><input type="text" className='border-2 border-amber-500 rounded-md'value={editProvider} onChange={e=>setEditProvider(e.target.value)}/></td>
    <td className='p-6 '><button className='bg-orange-500 hover:bg-green-700 text-white font-bold px-2 rounded' onClick={e => commitProductEdition(product)}>Save</button></td>
    </tr> 
    }
    </>)
};

export default Product;
