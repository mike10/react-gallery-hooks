import React, { useEffect, useState } from 'react'
import "./Gallery.css"

import { ListUsers } from '../ListUsers/ListUsers'
import { Footer } from '../Footer/Footer'
import { Pagination } from '../Pagination/Pagination'
import { Select } from '../Select/Select'
import { ChoseTheme } from '../ChoseTheme/ChoseTheme'

export function Gallery() {
  
  const [state, setState] = useState({
    activePag: 0, //Выбранное число пагинации
    usersOnPage: 10, //число пользователей на странице
    data: [], //весь массив с пользователями
    outData: [] //массив с пользователями для экрана
  });

  async function getData() {
    let data = []
    let answer1, json1, answer2, json2
    let url = new URL('https://dummyapi.io/data/v1/user?page=0&limit=50');
    url.searchParams.set('limit', '50')
    url.searchParams.set("page", "0")
    try{
      answer1 = await fetch("https://dummyapi.io/data/v1/user?page=0&limit=50", { headers: { "app-id": '61812ad9523754cd8285f9e7' } })
      answer2 = await fetch("https://dummyapi.io/data/v1/user?page=1&limit=50", { headers: { "app-id": '61812ad9523754cd8285f9e7' } })
      if (answer1.ok) { 
        json1 = await answer1.json();
        if (answer2.ok) { 
          json2 = await answer2.json();
          data = json1.data.concat(json2.data)
          selectRange(5, data)
        } 
      } 
      //console.log(data)
    }catch(err) {
      alert("Проблема с сетевым запросом "+err); // TypeError: failed to fetch
    }
    
  } 

  useEffect(() => {
    getData()
   }, []);

  function selectRange(newUsersOnPage, data=state.data){
    console.log("selectRange" + newUsersOnPage)
    setState({
      activePag: 0,
      usersOnPage: newUsersOnPage,
      data: data,
      outData: data.slice(0, newUsersOnPage)
    })
    
  }

  function selectNumPag(num){
    let newActivePag = num-1
    let usersOnPage = Number(state.usersOnPage)
    let newOutData = state.data.slice(newActivePag*usersOnPage, newActivePag*usersOnPage+usersOnPage)
    setState({
      activePag: newActivePag,
      usersOnPage: state.usersOnPage,
      data: state.data,
      outData: newOutData
    })
  }
    
  if(state.outData){
    return ( 
      <section>
        <header>
          <h1 className="h1">Пользователи</h1>
        </header>
              <ListUsers data={ state.outData }/> 
        <Footer>
          <Pagination usersOnPage={state.usersOnPage} dataLength={state.data.length} activePag={state.activePag} selectNumPag={selectNumPag}/>
          <Select selectRange={selectRange} rangeUsersOnPage={[5, 10, 20, 40, 50]}/>
          <ChoseTheme/>
        </Footer>        
      </section>
    )
  }
  return(
    <section>
      <headers>
        <h1>No data</h1>
      </headers>
    </section>
  )
}


 