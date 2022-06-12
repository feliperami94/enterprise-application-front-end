import * as React from 'react';

interface IBillProductRowProps {
    entry:[string, number]
}

const BillProductRow: React.FunctionComponent<IBillProductRowProps> = ({entry}) => {
  return (
    <tr>
        <td>{entry[0]}</td>
        <td>{entry[1]}</td>
    </tr>

  );
};

export default BillProductRow;
