import React from 'react'
import "./Gallery.css"
import { ListUsers } from '../ListUsers/ListUsers'
import { Footer } from '../Footer/Footer'
import { Pagination } from '../Pagination/Pagination'
import { Select } from '../Select/Select'
import { ChoseTheme } from '../ChoseTheme/ChoseTheme'

export class Gallery extends React.Component {
    
    constructor(props){
        super(props)
        this.data = []
        this.state = {
                      activePag: 0, //Выбранное число пагинации
                      maxPag: 5, //Максимум пагинаций
                      usersOnPage: 10, //число пользователей на странице
                      data: [], //весь массив с пользователями
                      outData: [] //массив с пользователями для экрана
                    }
       
        this.selectRange = this.selectRange.bind(this)
        this.selectNumPag = this.selectNumPag.bind(this)        
    }

  

  async toGetData() {
    try {
      let url = new URL('https://dummyapi.io/data/v1/user?');

      url.searchParams.set('limit', '50');
      let response = await fetch(url, {
        headers: {
          "app-id": '61812ad9523754cd8285f9e7'
        }
      })
      if (response.ok) { 
        let json = await response.json();
        let data = json.data
        //let num = this.state.maxPag
        this.selectRange(0, data)
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    } catch (err) {
      alert(err); 
    }
  }

  componentDidMount() {
    this.toGetData()
  }

  selectRange(num, data=this.state.data){
    let massiv = [10, 20, 40, 50]
    let newNum = Math.ceil(data.length/massiv[num])
    this.setState({
      activePag: 0,
      usersOnPage: massiv[num],
      maxPag: newNum,
      data: data,
      outData: data.slice(0, massiv[num])
    })
  }

  selectNumPag(num){
    console.dir(this.state)
    let activePag = num-1
    let usersOnPage = this.state.usersOnPage
    let data = this.state.data
    this.setState({
      activePag: activePag,
      outData: data.slice(activePag*usersOnPage, activePag*usersOnPage+usersOnPage)
    })
  }

    render() {
      if(this.state.outData){
        let data = this.state.outData
        let maxPag = this.state.maxPag
        let activePag = this.state.activePag

        return ( 
          <section>
            <header>
              <h1>Пользователи</h1>
            </header>
            <ListUsers data={ data }/>
           <Footer>
              <Pagination maxPag={maxPag} activePag={activePag} selectNumPag={this.selectNumPag}/>
              <Select selectRange={this.selectRange}/>
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
  }