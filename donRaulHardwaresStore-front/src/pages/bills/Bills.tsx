import * as React from 'react';
import { useSelector } from 'react-redux';
import BillList from '../../component/bills/BillList';
import FormPostBills from '../../component/bills/FormPostBill';
import { getAllBills, selectBillState } from '../../features/billSlice';
import { useAppDispatch } from '../../app/store';


interface IBillsProps {
}

const Bills: React.FunctionComponent<IBillsProps> = (props) => {

  return (
    <div className='flex'>
      <BillList/>
    </div>
  );
};

export default Bills;
