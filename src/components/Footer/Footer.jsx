import React from "react";
import "./Footer.css"

export class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
                {this.props.children}
            </footer>
            
        )
    }
}