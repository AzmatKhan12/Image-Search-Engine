import { useContext, useState } from "react";
import Button from "./Button";
import { ImageContext } from "../App";


const SearchField = (props) => {
   const [searchValue , setSearchValue]=useState("")
   const {fetchData,setSearchImage} = useContext(ImageContext)
   const changeButtonHandler = ()=>{
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCES_KEY}`)
    setSearchValue ("") 
    setSearchImage(searchValue)
   }

   const changeEnterHandler = (e)=>{
    if(e.key=== "Enter"){
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCES_KEY}`)
      setSearchValue ("") 
      setSearchImage(searchValue)
    }
   }

   const changeInputHandler= (e)=>{
    setSearchValue(e.target.value)
    
   }
  return (
    <div>
      <div className="flex px-8">
          <input style={{marginLeft:"400px"}}
            className="bg-gray-50 border border-gray-300 w-full text-sm item-centre indent-2  
            p-2.5 outline-none focus:border-blue-500 focus:ring-2 
            rounded-tl rounded-bl max-w-xs  "
            onKeyDown={changeEnterHandler}
            value={searchValue}
            onChange={changeInputHandler}
            
          />
          <Button
            onClick= {changeButtonHandler}
            disabled ={!searchValue} >
            Search
            
          </Button>
        </div>
    </div>
  );
};

export default SearchField;
