import React, {useEffect, useState} from "react";
import "./UserProfile.css"

export const UserProfile = (props) => {
    
    const [data, setData] = useState({})
    
    

    useEffect(() => {
        let url = new URL('https://dummyapi.io/data/v1/user/'+props.match.params.id);
        //url.searchParams.set('limit', '50')
        //url.searchParams.set("page", "1")
        fetch(url, {headers: {
            "app-id": '61812ad9523754cd8285f9e7'
          }}).then(res => {
           return res.json();
         }).then(json => {
          //let data = json.map()
           //data = json
           //console.log(json)  
          setData(json)
        }).catch(err => {
            alert(err)
        })
       }, []);
    
    console.dir(props)
    if(data){
        let d = data
        console.dir(d)
        return(
            <div className="profile">
                <div className="profile__row">
                    <div> <img src={d.picture} alt="" /></div>
                    <div><span>{d.id}</span></div>
                </div>
                <div className="profile__row">
                    <div><strong>{`${d.title} ${d.firstName} ${d.lastName}`}</strong> </div>
                    <div></div>
                </div>
                <div className="profile__row">
                    <div><strong>gender</strong></div>
                    <div><span>{d.gender}</span></div>
                </div>
                <div className="profile__row">
                    <div><strong>email</strong></div>
                    <div><span>{d.email}</span></div>
                </div>
                <div className="profile__row">
                    <div><strong>dateOfBirth</strong></div>
                    <div> <span>{d.dateOfBirth}</span></div>
                </div>
                <div className="profile__row">
                    <div><strong>registerDate</strong></div>
                    <div><span>{d.registerDate}</span></div>
                </div>
                <div className="profile__row">
                    <div><strong>phone</strong></div>
                    <div><span>{d.phone}</span></div>
                </div>
                <div className="profile__row">
                    <div><strong>country</strong></div>
                    <div><span>{d.location?.country}</span></div>
                </div>
                <input className="profile__input" type="button" value="🢀" onClick={(e) => {
                    e.stopPropagation();
                    props.history.goBack()}} />
            </div>
        )
    }
    return(
        <div>
            <strong>Data is loading...</strong>
        </div>
    )   
    
}
