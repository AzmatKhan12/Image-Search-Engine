import Button from "./Button";


const SearchField = (props) => {
  const onClick = ()=>{
    console.log("clicked")
   }
  return (
    <div className="flex px-8 ">
      <input
        className="bg-gray-50 border border-gray-300  w-full text-sm item-centre indent-2  
         p-2.5 outline-none focus:border-blue-500 focus:ring-2 
         rounded-tl rounded-bl "
        type="search"
        placeholder="Search anything"
      />
      <Button onClick= {onClick}>Search</Button>
    </div>
  );
};

export default SearchField;
