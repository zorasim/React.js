import React, { useState } from "react";

export function Edit({commentId,comment,savedComemnt}){
    const[editedComent,setEditedComment]=useState(comment||"")
    //setEditedComment(comment)

    const handleSave=()=>{
        if(editedComent!=""){
            savedComemnt(commentId,editedComent)
        }
    }
    console.log(comment)
    return(
        <div>
            <textarea cols="30" rows="5" value={editedComent} onChange={(e)=>{setEditedComment(e.target.value)}}></textarea>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}