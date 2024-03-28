import React, { useState } from "react";
import { Information } from "./assets/components/Inputeditems";
import CatIcon from "./assets/images/catIcon.png"
import PawButton from "./assets/images/catpawbutton.png"
import "./assets/css/App.css"

export function App(){
  //Input information
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[bday,setBday]=useState("")
  const[breed,setBreed]=useState("")

  const[clicked,setClicked]=useState(false)
  const[showInfo,setShow]=useState(false)

  const list=[
    {name:name,mail:email,password:password,date:bday,cat:breed}
  ]
  console.log(list)
  return(
    <div id="app">
      <div className="header">
        <h1>Cats News Letter sign up form!</h1>
        <img src={CatIcon} alt="cat popping out of a computer" className="cat" />
      </div>
      <div className="input">
        {/*Username */}
        <p>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="meow123" name="username" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
        </p>

        {/*Email */}
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="meow123@gmail.com" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
        </p>

        {/*Password */}
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Paw123!" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
        </p>

        <p>
          <label htmlFor="repassword">Repeat Password</label>
          <input type="password" placeholder="Paw123!" name="repassword" required/>
        </p>

        {/*Date of Birth */}
        <p>
          <label htmlFor="bday">Date of Birth</label>
          <input type="date" name="bday" value={bday} onChange={(e)=>{setBday(e.target.value)}} required/>
        </p>

        {/*Cat Breed */}
        <p>
          <label htmlFor="breed">Cat Breed</label>
          <input type="text" name="breed" value={breed} onChange={(e)=>{setBreed(e.target.value)}} required/>
        </p>
      </div>
        {/*Button*/}
         <a href="#" onClick={() => {clicked ? (setShow(true),setClicked(false) ): (setShow(false),setClicked(true))}}><img src={PawButton }alt="paw button" className="button" onClick={() => {clicked ? (setShow(true),setClicked(false) ): (setShow(false),setClicked(true))}}/> Click me!</a>

         <div id="table">
          {showInfo && <Information listOfInfo={list}/>}
         </div>


    </div>
  )
}