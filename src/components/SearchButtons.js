import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { ImageContext } from '../App'

const SearchButtons = () => {
    const {fetchData,setMountain,setFlowers,setBeaches,setCities} = useContext(ImageContext);
    const mountainHandler= ()=>{
        fetchData(`search/photos?page=1&query=mountain&client_id=${process.env.REACT_APP_ACCES_KEY}`)
        setMountain("Mountain")
    }

    const flowerHandler= ()=>{
        fetchData(`search/photos?page=1&query=flowers&client_id=${process.env.REACT_APP_ACCES_KEY}`)
        setFlowers("Flowers")
    } 
    const beachesHandler= ()=>{
        fetchData(`search/photos?page=1&query=beaches&client_id=${process.env.REACT_APP_ACCES_KEY}`)
        setBeaches("Beaches") 
    } 
    const citiesHandler = ()=>{
        fetchData(`search/photos?page=1&query=Cities&client_id=${process.env.REACT_APP_ACCES_KEY}`)
        setCities("Cities") 
    }
  return (
    <div style={{marginLeft:"200px"}}>
      <div className='flex'>
            <div className ="pl-8 ml-10 mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid:cols-4 
            max-w-7xl mx-auto px-4'"> <Button onClick={mountainHandler}>Mountain</Button></div>
            <div className ="pl-8 ml-10 mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid:cols-4 
            max-w-7xl mx-auto px-4'"> <Button onClick={flowerHandler}>Flowers</Button></div>
            <div className ="pl-8 ml-10 mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid:cols-4 
            max-w-7xl mx-auto px-4'"> <Button onClick={beachesHandler}>Beaches</Button></div>
            <div className ="pl-8 ml-10 mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid:cols-4 
            max-w-7xl mx-auto px-4'"> <Button onClick={citiesHandler}>Cities</Button></div>
      </div>
      
    </div>
  )
}

export default SearchButtons