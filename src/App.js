
import './App.css';


import React from 'react'
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import UseAxios from './Hooks/UseAxios';

const App=()=> {
  const {isLoading,response,error,fetchData}=UseAxios(`search/photos?page=1&query=dog&client_id=${process.env.REACT_APP_ACCES_KEY}`)
    
     console.log(response);
  return (
    <>
      <Jumbutron>
         <SearchField/>
      </Jumbutron>
      <Images/>
    </>
  )
}

export default App


