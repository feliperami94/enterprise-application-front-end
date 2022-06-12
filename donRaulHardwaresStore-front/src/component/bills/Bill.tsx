import * as React from 'react';
import { billType } from '../../features/billSlice';
import { useSelector} from 'react-redux';
import {selectProductState} from '../../features/productslice';
import BillProductRow from './BillProductRow';

interface IBillProps {
  bill:billType
}

const Bill: React.FunctionComponent<IBillProps> = ({bill}) => {
  const productState = useSelector(selectProductState());



  return (
    <div>
      <ul >
        <li className='p-4'>Bill ID: {bill.billId}</li>
        <li className='p-4'>Bill Date: {bill.billDate}</li>
        <li className='p-4'>Client Name: {bill.clientName}</li>
        <li className='p-4'>Seller Name: {bill.sellerName} </li>
      </ul>
      <table className='w-full'>
        <thead className='mx-auto justify-center bg-amber-500'>
          <th>Product</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          {Object.entries(bill.productList).map(entry => <BillProductRow key={bill.billId} entry={entry}/>)}
          <tr>
            <td>
              Total paid: {bill.totalPaid}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Bill;
