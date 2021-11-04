import React from "react";
import "./Pagination.css"

export class Pagination extends React.Component{
    constructor(props){
        super(props)
        this.nextPag = this.nextPag.bind(this)
    }
    
    makeDiv(maxPag){
        let div = []
        let activePag = this.props.activePag

        for(let i=0; i < maxPag; i++){
            if(i === activePag){
                div.push(<div className="pagination__el pagination__el_active" key={i} onClick={this.nextPag}>{i+1}</div>)
                continue
            }
            div.push(<div className="pagination__el" key={i} onClick={this.nextPag}>{i+1}</div>)
        }
        return div
    }

    nextPag(e){
        let num = e.target.innerText
        this.props.selectNumPag(num)
    }

    render(){
        let maxPag = this.props.maxPag
        let div = this.makeDiv(maxPag)
        return(  
            <div className="pagination" onClick={this.nextPag}> {div}</div>
            )
    }
}