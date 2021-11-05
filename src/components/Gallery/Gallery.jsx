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
    maxPag: 5, //Максимум пагинаций
    usersOnPage: 10, //число пользователей на странице
    data: [], //весь массив с пользователями
    outData: [] //массив с пользователями для экрана
  });

  function selectRange(num, data=state.data){
    let massiv = [10, 20, 40, 50]
    let newNum = Math.ceil(data.length/massiv[num])
    
    setState({
      activePag: 0,
      usersOnPage: massiv[num],
      maxPag: newNum,
      data: data,
      outData: data.slice(0, massiv[num])
    })
  }

  function selectNumPag(num){
    let activePag = num-1
    let usersOnPage = state.usersOnPage
    let data = state.data
    let outData = data.slice(activePag*usersOnPage, activePag*usersOnPage+usersOnPage)
    
    setState({
      activePag: activePag,
      usersOnPage: state.usersOnPage,
      maxPag: state.maxPag,
      data: state.data,
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
    })
   }, []);
    
  if(state.outData){
    return ( 
      <section>
        <header>
          <h1 class="h1">Пользователи</h1>
        </header>
        <ListUsers data={ state.outData }/>
        <Footer>
          <Pagination maxPag={state.maxPag} activePag={state.activePag} selectNumPag={selectNumPag}/>
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


 