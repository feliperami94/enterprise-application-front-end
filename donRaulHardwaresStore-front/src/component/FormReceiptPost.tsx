import * as React from 'react';
import { useSelector } from 'react-redux'
import { selectProviderState } from '../features/providerSlice'
import { selectProductState } from '../features/productslice'
import { useAppDispatch } from '../app/store'
import { postReceipt, receiptType } from '../features/receiptSlice';
import * as moment from 'moment'

interface IFormReceiptPostProps {
}

const FormReceiptPost: React.FunctionComponent<IFormReceiptPostProps> = (props) => {
  const providerState = useSelector(selectProviderState());
  const productState = useSelector(selectProductState());

  const dispatch = useAppDispatch();

  const [productId, setProductId] = React.useState('')
  const [quantity, setQuantity] = React.useState(0)

  const generateReceipt = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(productId && quantity){
      const product = productState.filter(product => product.productId === productId)[0];
      const actualDate = moment().format("DD-MM-YYYY");   
      const newReceipt: receiptType = {productQuantity: quantity, receiptProductId: productId, receiptDate: actualDate  ,providerId: product.providerId }
      dispatch(postReceipt(newReceipt))
    }
    setProductId('');
    setQuantity(0);



    
  }

  return (<form onSubmit={(e) => generateReceipt(e)} className='w-1/2 mx-auto border-4 my-6 rounded-lg'>
  <div className='bg-orange-600 py-6'><h1 className='text-lg text-center font-bold'>Create Receipt</h1></div>
  <table className='w-full mx-auto pl-6 text-sm text-center rounded-lg'>
      <thead className='bg-amber-500 '>
        <tr>
            <th className='p-6 px-50 text-lg'>Product Name</th>
            <th className='p-6 px-50 text-lg'>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
        <select name="" id="" className='border-2 border-amber-500 rounded-md'  onChange={e=>setProductId(e.target.value)}>
          {<option disabled selected>Choose Product</option>}
          {productState.map((product) => <option key={product.productId} value={product.productId}>
            {product.productName}
          </option>)}
        </select>
          </td>
        
          <td>
            <input type="text" name="" id="" className='my-6 border-2 border-amber-500 rounded-md' value={quantity} onChange={e=>setQuantity(Number(e.target.value))}/>
          </td>

        </tr>
      </tbody>
    </table>
    <div className='flex justify-center'>
<button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4' >Generate Receipt</button>
    </div>

</form>);
};

export default FormReceiptPost;
