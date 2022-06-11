import * as React from 'react';
import { postProvider, providerType } from '../features/providerSlice';
import { useAppDispatch } from '../app/store'


interface IFormProviderPostProps {
}

const FormProviderPost: React.FunctionComponent<IFormProviderPostProps> = (props) => {
    const [providerName, setProviderName] = React.useState('')
    const [providerPhone, setProviderPhone] = React.useState('')
    const [providerPassport, setProviderPassport] = React.useState('')
    const dispatch = useAppDispatch()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (providerName && providerPhone && providerPassport) {
          const newProvider: providerType = { providerName, providerPhone, providerPassport, availability: true}
          dispatch(postProvider(newProvider))
          setProviderName('')
          setProviderPhone('')
          setProviderPassport('')
        }
    }

  return (<form onSubmit={(e) => handleSubmit(e)} className='w-3/4 mx-auto rounded-lg border-4'>
    <h1 className='text-lg bg-amber-500 mx-auto py-5 text-center font-bold rounded-lg'>Add New Provider</h1>
    <div className='p-6 mx-auto'>
      <label className='text-lg'>
          Provider's Name:
          <input className='border-2 border-amber-500 rounded-md' type='text' value={providerName} onChange={(e) => setProviderName(e.target.value)} />
      </label>
    </div>

    <div className='p-6 mx-auto'>
  <label className='text-lg'>
    Provider's Phone:
    <input className='border-2 border-amber-500 rounded-md' type='number' value={providerPhone} onChange={(e) => setProviderPhone(e.target.value)} />
  </label>

    </div>
    <div className='p-6 mx-auto'>
  <label className='text-lg'>
    Provider's Passporte:
    <input className='border-2 border-amber-500 rounded-md' type='text' value={providerPassport} onChange={(e) => setProviderPassport(e.target.value)} />
  </label>
    </div>
    <div className='flex justify-center my-4'>
  <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
    </div>

</form>)
};

export default FormProviderPost
