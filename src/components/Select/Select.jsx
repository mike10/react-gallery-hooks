import React, { useState } from "react";
import "./Select.css"

export const Select = (props) => {
   
    //const [option, setOpt] = useState(props.rangeUsersOnPage)

    const selectRange = (e) =>{
        let index = e.target.options.selectedIndex
        let option = e.target.options
        props.selectRange(option[index].value)
    }
    
    return(
       
        <label>Количество отображаемых пользователей
            <select onChange={selectRange}>
                { props.rangeUsersOnPage.map(val => {
                    return <option key={val} value={val}>{val}</option>
                }) }
            </select>
        </label>
        
    )
    
}