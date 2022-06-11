import * as React from 'react';
import FormReceiptPost from '../../component/FormReceiptPost';
import ReceiptsList from '../../component/ReceiptsList';

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
