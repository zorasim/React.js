import React,{useState,useEffect} from "react";
import { Edit } from "./EditComment";
import PropTypes from "prop-types"


export function Comments({listofComments,inputedPlatform,deleteCom}){

    const [filteredComments, setFilteredComments] = useState([]);
    const[editedCommentID,setEditedComent]=useState(null)

    useEffect(() => {
        const filtered = listofComments.filter((item) => item.platform === inputedPlatform);
        setFilteredComments(filtered);
    }, [listofComments, inputedPlatform]);

    const update =(editedCommentID,updatedComment)=>{
        console.log(editedCommentID)
        console.log(updatedComment)
        const updatedComments = filteredComments.map((item) =>
        item?.id === editedCommentID ? { ...item, comment: updatedComment } : item
        );
  
        setFilteredComments(updatedComments);
  
        setEditedComent(null)
    }
    
    return(
        <div id="Comment">
            <ol>
                {
                    filteredComments.map((item)=>{
                        return(
                            <li key={item.id}>
                                {
                                    editedCommentID===item?.id ? (<Edit commentId={item.id} comment={item.comment} savedComemnt={update}/>)
                                    :
                                    (<>
                                        <div>{item.comment}</div>
                                        <button onClick={()=>{setEditedComent(item.id)}}>edit</button>
                                    </>)
                                }
                                <button onClick={()=>deleteCom(item.id)}>delete</button>
                            </li>
                        )
                    })
                    
                }
            </ol>

        </div>
    )
}

Comments.propTypes={
    listofComments:PropTypes.arrayOf(PropTypes.object).isRequired,
    inputedPlatform:PropTypes.string
}
