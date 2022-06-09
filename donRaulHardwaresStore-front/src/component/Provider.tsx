import * as React from 'react';
import { providerType } from '../features/providerSlice'
import { useAppDispatch } from '../app/store'



interface IProviderProps {
    provider: providerType
}

const Provider: React.FunctionComponent<IProviderProps> = ({provider}) => {
    const dispatch = useAppDispatch()

  return (
    <div className='item'>
      <p>{provider.providerName}</p>
    </div>
    );
};

export default Provider;
