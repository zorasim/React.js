import React, { useState } from "react";

export function Edit({comment,savedComemnt}){
    const[editedComent,setEditedComment]=useState("")

    const handleSave=()=>{
        if(editedComent!=""){
            savedComemnt(comment,editedComent)
        }
    }
    
    return(
        <div>
            <textarea cols="30" rows="5" value={editedComent} onChange={(e)=>{setEditedComment(e.target.value)}}></textarea>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}