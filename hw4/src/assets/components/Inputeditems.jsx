import React from "react";
import PropTypes from "prop-types"
import "../css/Inputeditems.css"

export const Information=({listOfInfo})=>{
    // console.log(`I'm in`)
    return(
        <div id="table">
            <table border={1} id="cat-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Birthday</th>
                        <th>Breed</th>
                    </tr>
            </thead>
            <tbody>
                {listOfInfo.map((info,i)=>{
                    return(
                        <tr key={i}>
                            <td>{info.name}</td>
                            <td>{info.mail}</td>
                            <td>{info.password}</td>
                            <td>{info.date}</td>
                            <td>{info.cat}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    )
}
Information.protoTypes={
    listOfInfo: PropTypes.arrayOf(PropTypes.object).isRequired
}