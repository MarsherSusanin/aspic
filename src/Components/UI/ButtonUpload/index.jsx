import "./style.css";
import React, {useRef} from 'react';
const ButtonUpload = (props)=> {
  const fileInputRef=useRef();
  const handleChange(event) = () =>{
    // do something with event data
  }
  return(
    <>
      <button onClick={()=>fileInputRef.current.click()}>
        Custom File Input Button
      </button>
      <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file'hidden/>
    </>
  )
}
