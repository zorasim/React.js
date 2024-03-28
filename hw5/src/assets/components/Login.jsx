import React,{useState} from "react";

export const Login=()=>{
    const [inputarea,setArea]=useState("input")

    const elements = [
        {value:"Facebook",name:"Facebook"},
        {value:"Instagram",name:"Instagram"},
        {value:"SnapChat",name:"SnapChat"}
    ];

    return(
        <div id="login">
            <label htmlFor="socials">Choose your Platform!</label>
            <select name="socials" id="socials">
                {elements.map((item,i)=>{
                    return(
                        <option key={i} value={item.value}>{item.name}</option>
                    )
                })}
            </select>
            {inputarea === "input" ? {return(
                <input type=" " />
            )}}
            
        </div>
    )
}