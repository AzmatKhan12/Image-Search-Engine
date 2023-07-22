
import './App.css';


import React, { createContext, useContext, useState } from 'react'
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images';
import UseAxios from './Hooks/UseAxios';
import SearchButtons from './components/SearchButtons';


// Create useContext..
export const ImageContext = createContext();

const App=()=> {
  const [searchImage,setSearchImage]=useState("");
  const [mountain,setMountain]= useState("");
  const [flowers,setFlowers]= useState("");
  const [beaches,setBeaches]=useState("");
  const [cities,setCities]= useState("")
  
  const {isLoading,response,error,fetchData}=UseAxios(`search/photos?page=1&query=dog&client_id=${process.env.REACT_APP_ACCES_KEY}`)
    
    console.log(response);
    const value = {
      isLoading,
      response,
      error,
      fetchData,
      searchImage,
      setSearchImage,
      mountain,setMountain,
      flowers,setFlowers,
      beaches,setBeaches,
      cities,setCities
    }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
         <SearchField/>
      </Jumbutron>
      <SearchButtons/>
      <Images/>
    </ImageContext.Provider>
  )
}

export default App


