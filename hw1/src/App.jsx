import React from "react";
import Cat from "./assets/maxwell-cat.gif";
import '../src/assets/css/App.css';
import {Catpun} from "../components/Catpun";
export function App(){
  return(
    <div id="main_case"> 
      <div>
          <h1 class="welcome">Welcome</h1>
          <h4 class="enjoy">have fun and enjoy</h4>
      </div>
          <img src={Cat} alt="cat spining" class="cat"/>
        <Catpun/>
    </div>
  )
}