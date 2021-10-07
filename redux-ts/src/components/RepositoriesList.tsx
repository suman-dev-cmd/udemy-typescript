import {useState} from 'react';
import { useActions } from './hooks/useActions';
import { useSelector } from 'react-redux';
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const {searchRepositoies} = useActions();
  const {loading,error,data} = useSelector(((state:any)=>state.repositories));
  console.log(data);
  const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    searchRepositoies(term);
  }
  return (
    <>
      <h1>Repositories</h1>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={(e)=>setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
    </>
  );
};

export default RepositoriesList;
