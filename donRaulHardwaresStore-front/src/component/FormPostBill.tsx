import * as React from 'react';
import {useSelector } from 'react-redux';
import {selectProductState} from '../features/productslice';
import {useAppDispatch} from '../app/store';

interface IFormPostBillsProps {
}

const FormPostBills: React.FunctionComponent<IFormPostBillsProps> = (props) => {
    const productState = useSelector(selectProductState())
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='w-1/2 mx-auto border-4 mt-6'>
        <div className='bg-orange-600 py-6'><h1 className='text-lg text-center font-bold'>Generate Bill</h1></div>
        
        <div className='inline-block w-1/2 p-6 mx-auto'>
      <label className='text-lg'>
          Client:
          <input className='border-2 border-amber-500 rounded-md' type='text' />
      </label>
    </div>
    <div className='inline-block w-1/2 p-6 mx-auto'>
      <label className='text-lg'>
          Seller:
          <input className='border-2 border-amber-500 rounded-md' type='text' />
      </label>
    </div>

    <table className='w-full mx-auto pl-6 text-sm text-center rounded-lg'>
        <thead>
            <tr>
                <th className='p-6 px-50 text-lg'>Product Name</th>
                <th className='p-6 px-50 text-lg'>Quantity</th>
            </tr>
        </thead>
        <tbody>
            {productState.map(product => {
                <tr>{product.productName}</tr>})}
        </tbody>

    </table>
  <button type='submit' className='mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Generate Bill</button>

</form>
  );
};

export default FormPostBills;