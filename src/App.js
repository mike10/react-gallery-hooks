import React from 'react';
import { Gallery } from './components/Gallery/Gallery';
import './App.css';
import { ThemeContext } from "./components/context/context"


class App extends React.Component {

  constructor(props){
    super(props)
    
    this.toggleTheme = this.toggleTheme.bind(this)

    this.state = {
      toggleTheme: this.toggleTheme,
      theme: "light"
    };
  }
  

  toggleTheme() {
    if(this.state.theme === "light"){
      this.setState({theme: "dark"})
    }else{
      this.setState({theme: "light"})
    }
  }

  render() {
    return ( 
      <ThemeContext.Provider value={this.state}>
        <div className={"App " + this.state.theme}>
          <Gallery />
        </div>
     </ThemeContext.Provider>
    )
  }

}

export default App;
