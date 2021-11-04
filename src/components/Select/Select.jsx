import React from "react";
import "./Select.css"

export class Select extends React.Component{
    constructor(props){
        super(props)
        //this.state = ({option: [10, 20, 40, 50]})
        this.selectRange = this.selectRange.bind(this)
    }

    selectRange(e){
        //console.dir(e.target.options)
        this.props.selectRange(e.target.options.selectedIndex)
    }

    render(){
        return(
            <label>Количество отображаемых пользователей
                <select onChange={this.selectRange}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option> 
                </select>
            </label>
            
        )
    }
}