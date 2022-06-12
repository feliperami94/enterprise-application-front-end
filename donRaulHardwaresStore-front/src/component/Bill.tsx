import * as React from 'react';
import { billType } from '../features/billSlice';
import { useSelector} from 'react-redux';
import {selectProductState} from '../features/productslice';

interface IBillProps {
  bill:billType
}

const Bill: React.FunctionComponent<IBillProps> = ({bill}) => {
  const productState = useSelector(selectProductState());


  return (
    <div>
      <ul className='p-4'>
        <li className=''>Bill ID: {bill.billId}</li>
        <li>Bill Date: {bill.billDate}</li>
        <li>Client Name: {bill.clientName}</li>
        <li>Seller Name: {bill.sellerName} </li>
      </ul>
    </div>
  );
};

export default Bill;
