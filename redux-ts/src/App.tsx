import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './state';
import RepositoriesList from './components/RepositoriesList';

const  App:React.FC=()=> {
  return (
    <Provider store={store}>
        <div>
          <h1>Search For a Package</h1>
          <RepositoriesList />
        </div>
    </Provider>
  );
}

export default App;
