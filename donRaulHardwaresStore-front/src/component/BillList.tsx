import * as React from 'react';
import { useAppDispatch } from '../app/store';
import { useSelector } from 'react-redux';
import {selectBillFetchError, selectBillState, selectBillStatus, billType} from '../features/billSlice';
import  Bill  from './Bill'

interface IBillListProps {
}

const BillList: React.FunctionComponent<IBillListProps> = () => {

    const billState = useSelector(selectBillState());

  return (
    <div className='flex sm:w-1/4 justify-left rounded-lg border-2 m-6'>
        {billState.map(bill=><Bill key={bill.billId} bill={bill}/>)}
    </div>
  );
};

export default BillList;
