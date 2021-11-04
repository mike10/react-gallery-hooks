import React from "react";
import "./ChoseTheme.css"
import { ThemeContext } from "../context/context"


export class ChoseTheme extends React.Component{
    constructor(props){
        super(props)
        this.themeChange = this.themeChange.bind(this)
    }

    static contextType = ThemeContext;

    themeChange(e){
        this.context.toggleTheme()
    }

    render(){ 
        return(
            <label>Темная темя<input type="checkbox" onChange={this.themeChange}/></label> 
        )
    }
}
