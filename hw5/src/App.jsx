import React,{useState} from "react";
import { Login } from "./assets/components/Login";
//import { MyComponent } from "./assets/components/test";

export function App(){
  const [platform,setPlatform]=useState("Facebook")

    const elements = [
        {value:"Facebook",name:"Facebook"},
        {value:"Instagram",name:"Instagram"},
        {value:"SnapChat",name:"SnapChat"},
        {value:"Other",name:"Other"},
    ];
    //console.log(platform)
  return(
    <div id="app">
      <label htmlFor="socials">Choose your Platform!</label>
            <select name="socials" id="socials" onChange={(e)=>{setPlatform(e.target.value)}} value={platform}>
                {elements.map((item,i)=>{
                    return(
                        <option key={i} value={item.value}>{item.name}</option>
                    )
                })}
            </select>
             <Login selectedPlatform={platform}/>

            {/* // <MyComponent/> */}
      
    </div>
  )
}