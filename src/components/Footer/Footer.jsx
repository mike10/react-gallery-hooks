import React from "react";
import "./Footer.css"

export const Footer = (props) => {
    render(){
        return(
            <footer className="footer">
                {props.children}
            </footer>
            
        )
    }
}