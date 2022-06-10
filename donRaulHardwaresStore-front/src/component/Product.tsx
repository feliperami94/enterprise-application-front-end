import * as React from 'react';
import { productType } from '../features/productslice';

interface IProductProps {
    product: productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  return (
    <tr>
    <td className='p-6 '>{product.productName}</td>
    <td className='p-6 '>{product.description}</td>
    <td className='p-6 '>{product.productPrice}</td>
    <td className='p-6 '>{product.productQuantity}</td>
    <td className='p-6 '>{product.minQuantity}</td>
    <td className='p-6 '>{product.maxQuantity}</td>
    {/* <td className='p-6 '><input type='checkbox' checked={provider.availability}></input></td> */}
  </tr>

  )
};

export default Product;
