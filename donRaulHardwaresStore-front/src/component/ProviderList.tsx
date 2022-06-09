import * as React from 'react';
import {useAppDispatch} from '../app/store'
import { useSelector } from 'react-redux'
import {selectProviderState, selectProviderStatus, selectProviderFetchError, getAllProviders, fetchStatus} from '../features/providerSlice'
import Provider from './Provider'

interface IProviderListProps {}

const ProviderList: React.FunctionComponent<IProviderListProps> = ({}) => {
    const dispatch = useAppDispatch()

    const error = useSelector(selectProviderFetchError())
    const status = useSelector(selectProviderStatus())
    const providerState = useSelector(selectProviderState())

    React.useEffect(() => {
        if (status === fetchStatus.IDLE) {
          dispatch(getAllProviders())
        }
      }, [dispatch])
  return <div className='container'>{!error && providerState.map((provider) => <Provider key={provider.providerId} provider={provider} />)}</div>;
};

export default ProviderList;
