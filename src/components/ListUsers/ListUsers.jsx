import React from 'react'
import "./ListUsers.css"
import {User} from '../User/User'


export class ListUsers extends React.Component {
    render() {
      let data = this.props.data
      return ( 
        <section className='list-users'>
          { data.map((value, index) => <User data={value} key={index}>{value.id}</User>) }
        </section>
      ) 
    }
  }
