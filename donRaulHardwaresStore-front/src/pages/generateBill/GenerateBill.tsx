import * as React from 'react';
import FormPostBills from '../../component/FormPostBill';

interface IGenerateBillProps {
}

const GenerateBill: React.FunctionComponent<IGenerateBillProps> = (props) => {
  return (
    <div>
        <FormPostBills/>
    </div>
  );
};

export default GenerateBill;
