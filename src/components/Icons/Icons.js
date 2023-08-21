
import { BsArrow90DegLeft} from "react-icons/bs";
import { BsArrow90DegRight} from "react-icons/bs";
import { AiOutlineUnorderedList} from "react-icons/ai";
import { BsFillChatLeftDotsFill} from "react-icons/bs";
import { BsSliders2} from "react-icons/bs";
import {BsWindowStack} from "react-icons/bs";
import { BsFillCloudUploadFill} from "react-icons/bs";

const Icons = () => {
  return (
    <div className="flex">
       
          <BsWindowStack style={{color:"white",width:"35px",height:"100px"}}/>
          <h4  style={{color:"white",width:"35px",height:"100px",marginLeft:"80px",marginTop:"35px"}}>Wireframe|CC</h4>
       
       
          <BsArrow90DegLeft  style={{color:"white",width:"35px",height:"100px",marginLeft:"220px"}}/>1
          <BsArrow90DegRight  style={{color:"white",width:"35px",height:"100px"}}/>
       
       
          <BsFillChatLeftDotsFill  style={{color:"white",width:"35px",height:"100px",marginLeft:"350px"}}/>
          <BsFillCloudUploadFill  style={{color:"white",width:"35px",height:"100px",marginLeft:"50px"}} />
          <BsSliders2  style={{color:"white",width:"35px",height:"100px",marginLeft:"50px"}}/>
          <AiOutlineUnorderedList  style={{color:"white",width:"35px",height:"100px",marginLeft:"50px"}}/>
          <h4  style={{color:"white",width:"35px",height:"100px",marginLeft:"50px",marginTop:"35px"}}>Sign_Up</h4>
        
    </div>
  )
}

export default Icons