
import './App.css';


import React, { createContext, useContext } from 'react'
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import UseAxios from './Hooks/UseAxios';


// Create useContext..
export const ImageContext = createContext();

const App=()=> {
  const {isLoading,response,error,fetchData}=UseAxios(`search/photos?page=1&query=dog&client_id=${process.env.REACT_APP_ACCES_KEY}`)
    
     console.log(response);
    const value = {
      isLoading,
      response,
      error,
      fetchData
    }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
         <SearchField/>
      </Jumbutron>
      <Images/>
    </ImageContext.Provider>
  )
}

export default App


