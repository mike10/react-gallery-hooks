import React from "react";
import "./ChoseTheme.css"
import { ThemeContext } from "../context/context"


export const ChoseTheme =()=>{

    //static contextType = ThemeContext

    themeChange(e){
        //this.context.value()
        //console.dir(this.context())
    }

    
    return(
        <label>Темная темя<input type="checkbox" onChange={themeChange}/></label> 
    )
    
}
