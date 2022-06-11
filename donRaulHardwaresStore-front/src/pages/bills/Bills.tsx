import * as React from 'react';
import { useSelector } from 'react-redux';
import BillList from '../../component/BillList';
import FormPostBills from '../../component/FormPostBill';
import { getAllBills, selectBillState } from '../../features/billSlice';
import { useAppDispatch } from '../../app/store';


interface IBillsProps {
}

const Bills: React.FunctionComponent<IBillsProps> = (props) => {

  return (
    <div>
      <BillList/>
    </div>
  );
};

export default Bills;
