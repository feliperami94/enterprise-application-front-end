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
          const newProvider: providerType = { providerName, providerPhone, providerPassport}
          dispatch(postProvider(newProvider))
          setProviderName('')
          setProviderPhone('')
          setProviderPassport('')
        }
    }

  return (<form onSubmit={(e) => handleSubmit(e)}>
  <label>
    Provider's Name:
    <input type='text' value={providerName} onChange={(e) => setProviderName(e.target.value)} />
  </label>
  <label>
    Provider's Phone:
    <input type='text' value={providerPhone} onChange={(e) => setProviderPhone(e.target.value)} />
  </label>
  <label>
    Provider's Passporte:
    <input type='text' value={providerPassport} onChange={(e) => setProviderPassport(e.target.value)} />
  </label>
  <button type='submit'>submit</button>
</form>);
};

export default FormProviderPost
