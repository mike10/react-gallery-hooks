import React from "react";
import "./Select.css"

export const Select = (props) => {
   
    const selectRange = (e) =>{
        props.selectRange(e.target.options.selectedIndex)
    }
    
    return(
        <label>Количество отображаемых пользователей
            <select onChange={selectRange}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={40}>40</option>
                <option value={50}>50</option> 
            </select>
        </label>
        
    )
    
}