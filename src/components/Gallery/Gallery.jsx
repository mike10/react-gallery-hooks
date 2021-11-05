import React, { useReducer, useEffect, useState, defaultData } from 'react'
import "./Gallery.css"
import { ListUsers } from '../ListUsers/ListUsers'
import { Footer } from '../Footer/Footer'
import { Pagination } from '../Pagination/Pagination'
import { Select } from '../Select/Select'
import { ChoseTheme } from '../ChoseTheme/ChoseTheme'

export function Gallery() {
  
  const [state, setState] = useState({
    activePag: 0, //Выбранное число пагинации
    maxPag: 5, //Максимум пагинаций
    usersOnPage: 10, //число пользователей на странице
    data: [], //весь массив с пользователями
    outData: [] //массив с пользователями для экрана
  });

  function selectRange(num, data=state.data){
    console.dir("selectRange")
    console.dir(data)
    let massiv = [10, 20, 40, 50]
    let newNum = Math.ceil(data.length/massiv[num])
    
    setState({
      activePag: 0,
      usersOnPage: massiv[num],
      maxPag: newNum,
      data: data,
      outData: data.slice(0, massiv[num])
    })
    console.dir(state)
  }

  function selectNumPag(num){
    //console.dir(state)
    let activePag = num-1
    let usersOnPage = state.usersOnPage
    let data = state.data
    let outData = data.slice(activePag*usersOnPage, activePag*usersOnPage+usersOnPage)

    setState({
      activePag: activePag,
      outData: outData
    })
  }

  useEffect(() => {
    let url = new URL('https://dummyapi.io/data/v1/user?');
    url.searchParams.set('limit', '50');
    fetch(url, {headers: {
     "app-id": '61812ad9523754cd8285f9e7'
   }}).then(res => {
       return res.json();
     }).then(json => {
      let data = json.data
      selectRange(0, data)
    });
   });
    
  console.dir("if") 
  console.dir(state) 
  if(state.outData){
    //console.dir(state.outData)
    let data = state.outData
    let maxPag = state.maxPag
    let activePag = state.activePag

  return ( 
    <section>
      <header>
        <h1>Пользователи</h1>
      </header>
      <ListUsers data={ data }/>
      <Footer>
        <Pagination maxPag={maxPag} activePag={activePag} selectNumPag={selectNumPag}/>
        <Select selectRange={selectRange}/>
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


 