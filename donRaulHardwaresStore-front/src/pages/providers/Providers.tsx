import * as React from 'react';
import FormProviderPost from '../../component/FormProviderPost';
import ProviderList from '../../component/ProviderList';

interface IProvidersProps {
}

const Providers: React.FunctionComponent<IProvidersProps> = (props) => {
  return <div className='flex justify-center sm:content-center overflow-x-auto shadow-md  mt-10'>
    <div className='w-3/4 mx-auto '>
    <ProviderList/>
    </div>
    <div className='w-3/4 mx-auto'>
      <FormProviderPost/>
    </div>


  </div>;
};

export default Providers;
