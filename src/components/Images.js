import React, { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image'
import Skeleton from './Skeleton'

const Images = () => {
  const {response,isLoading,searchImage,mountain,flowers,beaches,cities} =useContext(ImageContext)
  return (
    <div className='text-center mt-6 underline text-2xl'>
          Result for {searchImage||  mountain || flowers ||beaches ||cities }
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid:cols-4 gap-4 my-10
               max-w-7xl mx-auto px-4'>
            {isLoading ? <Skeleton item={10}/> : response.map((data,key)=> <Image key={key} data= {data}/>)}
          </div>
    </div>
  )
}

export default Images