import * as React from 'react';
import {useSelector, } from 'react-redux';
import { useAppDispatch } from '../app/store';
import { selectReceiptFetchError,  selectReceiptStatus, selectReceiptState, receiptFetchStatus, getAllReceipts} from '../features/receiptSlice';
import Receipt from './Receipt';

interface IReceiptsListProps {
}

const ReceiptsList: React.FunctionComponent<IReceiptsListProps> = ({}) => {
    const dispatch = useAppDispatch()

    const error = useSelector(selectReceiptFetchError())
    const status = useSelector(selectReceiptStatus())
    const receiptState = useSelector(selectReceiptState())



    React.useEffect(() => {
        if (status === receiptFetchStatus.IDLE) {
          dispatch(getAllReceipts())
        }
      }, [dispatch])
  return (
    <table className='w-3/4 mx-auto pl-6 text-sm text-center rounded-lg'>
      <thead className='bg-amber-500'>
        <tr>
            <th className='p-6 px-50 text-lg' >Date</th>
            <th className='p-6 px-50 text-lg' >Provider ID</th>
            <th className='p-6 px-50 text-lg'>Provider Name</th>
            <th className='p-6 px-50 text-lg'>Product ID</th>
            <th className='p-6 px-50 text-lg'>Product Name</th>
            <th className='p-6 px-50 text-lg'>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {!error && receiptState.map((receipt) => <Receipt key={receipt.receiptId} receipt={receipt} />)}
      </tbody>
    </table>);
};

export default ReceiptsList;
