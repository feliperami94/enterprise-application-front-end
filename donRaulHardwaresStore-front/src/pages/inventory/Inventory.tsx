import * as React from 'react';
import ProductList from '../../component/ProductList';

interface IInventoryProps {
}

const Inventory: React.FunctionComponent<IInventoryProps> = (props) => {
  return <div className='flex justify-center sm:content-center overflow-x-auto shadow-md  mt-10'>
    <ProductList/>
  </div>;
};

export default Inventory;
