import React,{useState,useEffect} from "react";
import { Comments } from "./Comments";

export const Login=({selectedPlatform})=>{
    //Values for input to texarea
    const [showInput, setShowInput] = useState(true);
    const [showTextarea, setShowTextarea] = useState(false);
    
    //Values for showing and commenting
    const[comments,addComments]=useState([])
    const[newComment,setComment]=useState("")
    const[showComment,setShowComment]=useState(false)

    //Functions for input to textarea
    const handleClick = () => {
        setShowInput(!showInput);
        setShowTextarea(true); 
    };
    const handleComment=()=>{
        setShowInput(!showInput);
        setShowTextarea(false);
    }
    
    //Functions for  showing and commenting
    function addComment(){
        let newcomment={
            id:comments.length+1,
            platform:selectedPlatform,
            comment:newComment
        }
        if(newComment!=""){
            addComments([
                ...comments,newcomment
            ])
        }
        setComment("")
        setShowComment(true)

    }

    function deleteComment(comId){
        const updatedComments=comments.filter((item)=>item.id !== comId)
        addComments(updatedComments)

    }
    //console.log(show)
    //console.log(comments)
    return(
        <div id="login">
            <div className="comment">
                {showInput && <input type="text" onClick={handleClick} placeholder="Leave a comment!" 
                    value={newComment}
                    onChange={(e)=>{setComment( e.target.value)}} />}
                {showTextarea && (
                    <textarea rows="5" cols="30" placeholder='enter text' value={newComment} onChange={(e)=>{setComment( e.target.value)}}></textarea>
                )
                }
                {showTextarea &&<button onClick={()=>{addComment(); handleComment();}}>Comment</button>
                }

                {showComment && <Comments listofComments={comments} inputedPlatform={selectedPlatform} deleteCom={deleteComment}/>}
            </div>


        </div>
    )
}