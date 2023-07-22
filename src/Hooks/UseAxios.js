
import axios from 'axios';
import React ,{useEffect, useState} from 'react'

const UseAxios = (param) => {
   const [response,setResponse] =useState([]);
   const [isLoading,setLoading]=useState(false);
   const [error,setError]= useState("");

   axios.defaults.baseURL= "https://api.unsplash.com";

   const fetchData = async (url)=>{
    try{
       setLoading(true);
       const res = await axios(url);
       setResponse(res.data.results)
    }catch(err){
        setError(err+" something went wrong")

    }finally{
      setLoading(false)
    }
   }

   useEffect(()=>{
    fetchData(param)
   },[param])

  return {
    response,
    isLoading,
    error,
    fetchData: url =>fetchData(url) // this for search enter
  }
    
  
}

export default UseAxios