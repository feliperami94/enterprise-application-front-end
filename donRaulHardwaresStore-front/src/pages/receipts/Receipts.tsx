import * as React from 'react';
import FormReceiptPost from '../../component/receipt/FormReceiptPost';
import ReceiptsList from '../../component/receipt/ReceiptsList';

interface IReceiptsProps {
}

const Receipts: React.FunctionComponent<IReceiptsProps> = (props) => {
  return (
    <div>
      <FormReceiptPost/>
      <ReceiptsList/>
    </div>
  );
};

export default Receipts;
