import {useState} from 'react';
import { useActions } from './hooks/useActions';
import { useTypedSeletor } from './hooks/useTypedSelector';
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const {searchRepositoies} = useActions();
  const {data,error,loading} = useTypedSeletor(((state)=>state.repositories));

  console.log(data);
  console.log(error);
  console.log(loading);
  const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    searchRepositoies(term);
  }
  return (
    <>
      <h1>Repositories</h1>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={(e)=>setTerm(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading ...</h3>}
      {!error && !loading && data && data.map((obj,i)=>(
        <div key={i}>{obj}</div>
      ))}
    </>
  );
};

export default RepositoriesList;
