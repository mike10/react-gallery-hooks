import React from 'react'
import "./User.css"


export const User = (props) => {
    
    
  let picture = props.data.picture
  let title = props.data.title
  let firstName = props.data.firstName
  let lastName = props.data.lastName
  let id = props.children

  return ( 
      
    <section className='list-users__user'>
      
      <div className='list-users__photo'>
        <img src={picture} alt="" />
      </div>
      <div className='list-users__name'>
        {`${title}. ${firstName} ${lastName}`}
        <div className='list-users__id'>
            {id}
        </div>
      </div>
      
    </section>
  )
    
  }