import * as React from 'react';
import ProviderList from '../../component/ProviderList';

interface IProvidersProps {
}

const Providers: React.FunctionComponent<IProvidersProps> = (props) => {
  return <div className='flex mx-auto  items-center sm:content-center overflow-x-auto shadow-md  mt-10 w-1/2'>
    <ProviderList/>

  </div>;
};

export default Providers;
