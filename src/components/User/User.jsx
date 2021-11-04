import React from 'react'
import "./User.css"


export class User extends React.Component {
    
    render() {
       let picture = this.props.data.picture
       let title = this.props.data.title
       let firstName = this.props.data.firstName
       let lastName = this.props.data.lastName
       let id = this.props.children

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
  }