import * as React from 'react';
import {useSelector } from 'react-redux';
import {selectProductState, selectBillProducts} from '../../features/productslice';
import {useAppDispatch} from '../../app/store';
import ProductItemBill from './ProductItemBill';
import {useState} from 'react'
import { billType, postBill } from '../../features/billSlice';
import * as moment from 'moment'


interface IFormPostBillsProps {
}

const FormPostBills: React.FunctionComponent<IFormPostBillsProps> = (props) => {
    const productState = useSelector(selectProductState())
    const dispatch = useAppDispatch();
    const [clientName, setClientName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const billProducts = useSelector(selectBillProducts())



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const array =  new Map(
          billProducts.map(billProduct=>{
            return [billProduct.productName, billProduct.quantity];
          }),
        );
        const productList = Object.fromEntries(array);

        const totalPaid = billProducts.reduce((aum, product) => product.price + aum, 0);


        const actualDate = moment().format("DD-MM-YYYY");

        if(clientName && sellerName && productList && totalPaid){
        const newBill:billType = {billDate: actualDate, clientName, sellerName, productList, totalPaid}
          dispatch(postBill(newBill))
        }
    }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='w-1/2 mx-auto border-4 mt-6'>
        <div className='bg-orange-600 py-6'><h1 className='text-lg text-center font-bold'>Generate Bill</h1></div>
        
        <div className='inline-block w-1/2 p-6 mx-auto'>
      <label className='text-lg'>
          Client:
          <input className='border-2 border-amber-500 rounded-md' type='text' value={clientName} onChange={e=>setClientName(e.target.value)}/>
      </label>
    </div>
    <div className='inline-block w-1/2 p-6 mx-auto'>
      <label className='text-lg'>
          Seller:
          <input className='border-2 border-amber-500 rounded-md' type='text' value={sellerName} onChange={e=>setSellerName(e.target.value)} />
      </label>
    </div>

    <table className='w-full mx-auto pl-6 text-sm text-center rounded-lg'>
        <thead className='bg-amber-500'>
            <tr>
                <th className='p-6 px-50 text-lg'>Product Name</th>
                <th className='p-6 px-50 text-lg'>Quantity</th>
                <th className='p-6 px-50 text-lg'>Available</th>
                <th className='p-6 px-50 text-lg'>Unitary Price</th>
            </tr>
        </thead>
        <tbody>
            {productState.map(product=><ProductItemBill product={product} key={product.productId}/>)}
        </tbody>

    </table>
    <div className='flex justify-center m-6'>
  <button type='submit' className='mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Generate Bill</button>
    </div>

</form>
  );
};

export default FormPostBills;
