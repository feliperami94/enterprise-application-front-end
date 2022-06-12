import * as React from 'react';
import { productType } from '../../features/productslice';
import {useAppDispatch} from '../../app/store';
import { productToBill, selectBillProducts } from '../../features/productslice'
import { useSelector} from 'react-redux';



interface IProductItemBillProps {
    product: productType
}

const ProductItemBill: React.FunctionComponent<IProductItemBillProps> = ({product}) => {
    const dispatch = useAppDispatch();
    const productState = useSelector(selectBillProducts())
    

    const updateQuantityHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const itemPrice = product.productPrice * Number(e.target.value)
        const billProduct = {productName: product.productName, quantity: Number(e.target.value), price:itemPrice}

            dispatch(productToBill(billProduct))
    }

  return (
    <tr>
        <td className='py-6'>
            {product.productName}
        </td>
        <td>
            <input type="number" defaultValue='0' className='border-2 border-amber-500 rounded-md' onChange={e=> updateQuantityHandler(e)} min='0'/>
        </td>
        <td>
            {product.productQuantity}
        </td>
        <td>
            {product.productPrice}
        </td>
    </tr>

  );
};

export default ProductItemBill;
