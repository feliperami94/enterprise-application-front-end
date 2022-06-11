import * as React from 'react';
import FormPostBills from '../../component/FormPostBill';

interface IBillsProps {
}

const Bills: React.FunctionComponent<IBillsProps> = (props) => {
  return (
    <div>
      <FormPostBills/>
    </div>
  );
};

export default Bills;
