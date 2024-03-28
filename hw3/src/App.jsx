import React,{useState} from "react";
import { Movies } from "./Movie"

import Poster1 from "./assets/imges/American Marry.jpg"
import Poster2 from "./assets/imges/Pearl.jpg"
import Poster3 from "./assets/imges/the-descent.jpg"
import "./assets/css/App.css"

const movies=[
  {id:1,name:"Amarican Marry", date:2012, plot:"The allure of easy money sends Mary Mason, a medical student, into the world of underground surgeries which ends up leaving more marks on her than her so-called freakish clients.", imdbLink:"https://www.imdb.com/title/tt1959332/", imgUrl:Poster1},
  {id:2,name:"Pearl", date:2020, plot:"In 1918, a young woman on the brink of madness pursues stardom in a desperate attempt to escape the drudgery, isolation, and lovelessness of life on her parents' farm.", imdbLink:"https://www.imdb.com/title/tt18925334/?ref_=fn_al_tt_1", imgUrl:Poster2},
  {id:3,name:"The descent", date:2005, plot:"A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators.", imdbLink:" https://www.imdb.com/title/tt0435625/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520des ", imgUrl:Poster3},

]
export function App(){
  const [promenliva,setPromenliva]=useState("Vrednost 1")


 return(

  <div id="app">
    <Movies movies={movies}/>
      {/* <div className="movie">
        <a href="#"><img src={Poster1} alt="" /></a>
      </div>
      <div className="movie">
      <a href="#"><img src={Poster2} alt="" /></a>
      </div>
      <div className="movie">
      <a href="#"><img src={Poster3} alt="" /></a>
      </div> */}
    </div>
 )
}