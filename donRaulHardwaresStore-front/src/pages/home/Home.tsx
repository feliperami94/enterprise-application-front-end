import * as React from 'react';
import GoogleLogin from '../../component/loginComponents/GoogleLogin';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

  
  return(
    <div className='flex justify-center mx-auto h-1/2'>
      <GoogleLogin />
    </div>
  );
};

export default Home;
