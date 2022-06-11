import * as React from 'react';
import { useSelector } from 'react-redux'
import { selectProviderState } from '../features/providerSlice'
import { selectProductState } from '../features/productslice'

interface IFormReceiptPostProps {
}

const FormReceiptPost: React.FunctionComponent<IFormReceiptPostProps> = (props) => {
  const providerState = useSelector(selectProviderState());
  const productState = useSelector(selectProductState())


  const [providerId, setProviderId] = React.useState('')

  const generateReceipt = (e: React.FormEvent<HTMLFormElement>)=>{
    
  }

  return (<form onSubmit={(e) => console.log(e)} className='w-1/2 mx-auto border-4'>
  <div className='bg-orange-600 py-6'><h1 className='text-lg text-center font-bold'>Create Receipt</h1></div>
  <table className='w-full mx-auto pl-6 text-sm text-center rounded-lg'>
      <thead className='bg-amber-500'>
        <tr>
            <th className='p-6 px-50 text-lg'>Product Name</th>
            <th className='p-6 px-50 text-lg'>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
        <select name="" id="" className='border-2 border-amber-500 rounded-md'  onChange={e=>setProviderId(e.target.value)}>
          {<option disabled selected>Choose Product</option>}
          {productState.map((product) => <option key={product.productId} value={product.productId}>
            {product.productName}
          </option>)}
        </select>
          </td>
        
          <td>
            <input type="text" name="" id="" className='border-2 border-amber-500 rounded-md'/>
          </td>

        </tr>
      </tbody>
    </table>
<button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onChange={e=>generateReceipt(e)}>Generate Receipt</button>

</form>);
};

export default FormReceiptPost;
