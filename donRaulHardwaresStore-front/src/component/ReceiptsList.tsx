import * as React from 'react';

interface IReceiptsListProps {
}

const ReceiptsList: React.FunctionComponent<IReceiptsListProps> = (props) => {
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
        {/* {!error && providerState.map((provider) => <Provider key={provider.providerId} provider={provider} />)} */}
      </tbody>
    </table>);
};

export default ReceiptsList;
