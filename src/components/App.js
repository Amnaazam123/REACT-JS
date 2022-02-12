import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom"
import Main from "./Main"
import Navbar from "./Navbar"
export default function App(){
    return(
        <><Navbar/>
        <Main/></>
    )  
} 

reactDom.render(<App/>,document.getElementById("root"))