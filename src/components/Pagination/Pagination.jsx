import React from "react";
import "./Pagination.css"

export const Pagination = (props) =>{
    
    const makeDiv = (maxPag) => {
        let div = []
        let activePag = props.activePag

        for(let i=0; i < maxPag; i++){
            if(i === activePag){
                div.push(<div className="pagination__el pagination__el_active" key={i} onClick={nextPag}>{i+1}</div>)
                continue
            }
            div.push(<div className="pagination__el" key={i} onClick={nextPag}>{i+1}</div>)
        }
        return div
    }

    const nextPag = (e) => {
        let num = e.target.innerText
        props.selectNumPag(num)
        //console.log(props)
    }

    
let maxPag = props.maxPag
let div = makeDiv(maxPag)
return(  
    <div className="pagination" onClick={nextPag}> {div}</div>
    )
    
}