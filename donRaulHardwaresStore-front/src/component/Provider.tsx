import * as React from 'react';
import { providerType } from '../features/providerSlice'
import { useAppDispatch } from '../app/store'



interface IProviderProps {
    provider: providerType
}

const Provider: React.FunctionComponent<IProviderProps> = ({provider}) => {
    const dispatch = useAppDispatch()

  return (
    <tr>
      <td className='p-6 '>{provider.providerName}</td>
      <td className='p-6 '>{provider.providerPhone}</td>
      <td className='p-6 '>{provider.providerPassport}</td>
      {/* <td className='p-6 '><input type='checkbox' checked={provider.availability}></input></td> */}
    </tr>
    );
};

export default Provider;
