import * as React from 'react';
import { useAppDispatch } from '../app/store'
import { postProduct, productType } from '../features/productslice';
import { useSelector } from 'react-redux'
import { selectProviderState } from '../features/providerSlice'


interface IFormProductPostProps {
}

const FormProductPost: React.FunctionComponent<IFormProductPostProps> = (props) => {
    const [productName, setProductName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [productQuantity, setProductQuantity] = React.useState(0)
    const [productPrice, setProductPrice] = React.useState(0)
    const [minQuantity, setMinQuantity] = React.useState(0)
    const [maxQuantity, setMaxQuantity] = React.useState(0)
    const [providerId, setProviderId] = React.useState('')
    const providerState = useSelector(selectProviderState())

    

    const dispatch = useAppDispatch()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (productName && description && productQuantity && productPrice && minQuantity && maxQuantity && providerId) {
          const newProduct: productType = { productName, description, productQuantity, productPrice, minQuantity, maxQuantity, providerId}
          dispatch(postProduct(newProduct))
          setProductName('')
          setDescription('')
          setProductQuantity(0)
          setProductPrice(0)
          setMinQuantity(0)
          setMaxQuantity(0)
          setProviderId('')
        }
    }

  return (
      <form onSubmit={(e) => handleSubmit(e)} className='w-full mx-auto border-4 mt-6'>
        <div className='bg-orange-600 py-6'><h1 className='text-lg text-center font-bold'>Add New Product</h1></div>
    <table className='w-full mx-auto pl-6 text-sm text-center rounded-lg'>
        <thead className='bg-amber-500'>
          <tr>
            <th className='p-6 px-50 text-lg'>Product Name</th>
            <th className='p-6 px-50 text-lg'>Description</th>
            <th className='p-6 px-50 text-lg'>Price</th>
            <th className='p-6 px-50 text-lg'>Quantity</th>
            <th className='p-6 px-50 text-lg'>Min Quantity</th>
            <th className='p-6 px-50 text-lg'>Max Quantity</th>
            <th className='p-6 px-50 text-lg'>Provider ID</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="text" className='border-2 border-amber-500 rounded-md' value={productName} onChange={e=>setProductName(e.target.value)}/></td>
                <td><input type="text" className='border-2 border-amber-500 rounded-md' value={description} onChange={e=>setDescription(e.target.value)}/></td>
                <td><input type="number" className='border-2 border-amber-500 rounded-md' value={productQuantity} onChange={e=>setProductQuantity(Number(e.target.value))}/></td>
                <td><input type="number" className='border-2 border-amber-500 rounded-md' value={productPrice} onChange={e=>setProductPrice(Number(e.target.value))}/></td>
                <td><input type="number" className='border-2 border-amber-500 rounded-md' value={minQuantity} onChange={e=>setMinQuantity(Number(e.target.value))}/></td>
                <td><input type="number" className='border-2 border-amber-500 rounded-md' value={maxQuantity} onChange={e=>setMaxQuantity(Number(e.target.value))}/></td>
                {/* <td><input type="string" className='border-2 border-amber-500 rounded-md' value={providerId} onChange={e=>setProviderId(e.target.value)}/></td> */}
                <select name="" id="" className='border-2 border-amber-500 rounded-md'  onChange={e=>setProviderId(e.target.value)}>
                  {providerState.map((provider) => <option key={provider.providerId} value = {provider.providerId}>
                    {provider.providerName}
                  </option>)}
                </select>
            </tr>
        </tbody>
      </table>
  <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Product</button>

</form>
  );
};

export default FormProductPost;
