import React, { useState } from 'react';

export const MyComponent=() =>{
    const [showInput, setShowInput] = useState(true);
    const [showTextarea, setShowTextarea] = useState(false);

    const handleClick = () => {
        setShowInput(!showInput);
        setShowTextarea(true); 
    };
    const hadleComment=()=>{
        setShowInput(!showInput);
        setShowTextarea(false);
    }

  return (
    <div>
      {showInput && <input type="text" onClick={handleClick} />}
      {showTextarea && (
        <textarea rows="5" cols="30" placeholder='enter text'></textarea>
      )
      }
      {showTextarea &&<button onClick={hadleComment}>Comment</button>
      }
    </div>
  ); 

}
