import * as React from 'react';
import { useAppDispatch } from '../app/store'
import { useSelector } from 'react-redux'
import {getAllProducts, selectProductFetchError, selectProductState, selectProductStatus, fetchStatus} from '../features/productslice'
import Product from "./Product"

interface IProductListProps {
}

const ProductList: React.FunctionComponent<IProductListProps> = (props) => {
    const dispatch = useAppDispatch()

    const error = useSelector(selectProductFetchError())
    const status = useSelector(selectProductStatus())
    const productState = useSelector(selectProductState())

    React.useEffect(() => {
        if (status === fetchStatus.IDLE) {
        dispatch(getAllProducts())
    }
    }, [dispatch])
    return (
        <table className='w-3/4 mx-auto pl-6 text-sm text-center rounded-lg'>
        <thead className='bg-amber-500'>
          <tr>
            <th className='p-6 px-50 text-lg'>Product Name</th>
            <th className='p-6 px-50 text-lg'>Description</th>
            <th className='p-6 px-50 text-lg'>Price</th>
            <th className='p-6 px-50 text-lg'>Quantity</th>
            <th className='p-6 px-50 text-lg'>Min Quantity</th>
            <th className='p-6 px-50 text-lg'>Max Quantity</th>
          </tr>
        </thead>
        <tbody>
          {!error && productState.map((product) => <Product key={product.productId} product={product} />)}
        </tbody>
      </table>
    )
};

export default ProductList;
