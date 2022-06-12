import * as React from 'react';
import { providerType, putProvider } from '../../features/providerSlice'
import { useAppDispatch } from '../../app/store'



interface IProviderProps {
    provider: providerType
}

const Provider: React.FunctionComponent<IProviderProps> = ({provider}) => {
    const [availability, setAvailability] = React.useState(provider.availability);
    const dispatch = useAppDispatch()

    const providerUpdate = async (e:React.ChangeEvent<HTMLInputElement>, provider: providerType) => {
      setAvailability(e.target.checked);
      const updatedProvider: providerType = { ...provider, availability: !availability}
      dispatch(putProvider(updatedProvider))
      }
  

  return (
    <tr>
      <td className='p-6 '><p style={availability?{}:{textDecoration: 'line-through'}}>{provider.providerName }</p></td>
      <td className='p-6 '><p style={availability?{}:{textDecoration: 'line-through'}}>{provider.providerPhone}</p></td>
      <td className='p-6 '><p style={availability?{}:{textDecoration: 'line-through'}}>{provider.providerPassport}</p></td>
      <td className='p-6 '><input type='checkbox' checked={availability} onChange={e=>providerUpdate(e, provider)}></input></td>
    </tr>
    );
};

export default Provider;
