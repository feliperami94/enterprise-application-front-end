import * as React from 'react';
import FormProviderPost from '../../component/FormProviderPost';
import ProviderList from '../../component/ProviderList';
import { useAppDispatch} from '../../app/store';
import { useSelector } from 'react-redux';
import { selectReceiptStatus, receiptFetchStatus, getAllReceipts } from '../../features/receiptSlice';
import { selectProviderStatus, providerFetchStatus, getAllProviders } from '../../features/providerSlice';
import { selectProductStatus, productFetchStatus, getAllProducts } from '../../features/productslice';
import { selectBillStatus, billFetchStatus, getAllBills } from '../../features/billSlice';


interface IProvidersProps {
}

const Providers: React.FunctionComponent<IProvidersProps> = (props) => {
  const dispatch = useAppDispatch();
  const receiptStatus = useSelector(selectReceiptStatus());
  const providerStatus = useSelector(selectProviderStatus());
  const productStatus = useSelector(selectProductStatus());
  const billStatus = useSelector(selectBillStatus());

  React.useEffect(() => {
    if (billStatus === billFetchStatus.IDLE) {
      dispatch(getAllBills())
    }
  }, [dispatch])

  React.useEffect(() => {
    if (receiptStatus === receiptFetchStatus.IDLE) {
      dispatch(getAllReceipts())
    }
  }, [dispatch])

  React.useEffect(() => {
    if (providerStatus === providerFetchStatus.IDLE) {
      dispatch(getAllProviders())
    }
  }, [dispatch])

  React.useEffect(() => {
    if (productStatus === productFetchStatus.IDLE) {
      dispatch(getAllProducts())
    }
  }, [dispatch])


    


  return <div className='flex justify-center sm:content-center overflow-x-auto shadow-md  mt-10'>
    <div className='w-3/4 mx-auto '>
    <ProviderList/>
    </div>
    <div className='w-3/4 mx-auto'>
      <FormProviderPost/>
    </div>


  </div>;
};

export default Providers;
