import * as React from 'react';
import { productType } from '../features/productslice';

interface IProductItemBillProps {
    product: productType
}

const ProductItemBill: React.FunctionComponent<IProductItemBillProps> = ({product}) => {
  return (
    <tr>
        <td className='py-6'>
            {product.productName}
        </td>
        <td>
            <input type="number" className='border-2 border-amber-500 rounded-md'/>
        </td>
        <td>
            {product.productQuantity}
        </td>
    </tr>

  );
};

export default ProductItemBill;
