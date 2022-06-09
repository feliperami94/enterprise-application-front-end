import * as React from 'react';
import { useAppDispatch } from '../app/store'
import { useSelector } from 'react-redux'
import { selectProviderState, selectProviderStatus, selectProviderFetchError, getAllProviders, fetchStatus } from '../features/providerSlice'
import Provider from './Provider'

interface IProviderListProps { }

const ProviderList: React.FunctionComponent<IProviderListProps> = ({ }) => {
  const dispatch = useAppDispatch()

  const error = useSelector(selectProviderFetchError())
  const status = useSelector(selectProviderStatus())
  const providerState = useSelector(selectProviderState())

  React.useEffect(() => {
    if (status === fetchStatus.IDLE) {
      dispatch(getAllProviders())
    }
  }, [dispatch])
  return (
    <table className='w-full text-sm text-center sm:rounded-lg'>
      <thead className='bg-gray-400'>
        <tr>
          <th className='p-6 px-50 text-lg' >Name</th>
          <th className='p-6 px-50 text-lg'>Phone</th>
          <th className='p-6 px-50 text-lg'>Password</th>
          <th className='p-6 px-50 text-lg'>Availability</th>
        </tr>
      </thead>
      <tbody>
        {!error && providerState.map((provider) => <Provider key={provider.providerId} provider={provider} />)}
      </tbody>
    </table>)
};

export default ProviderList;
