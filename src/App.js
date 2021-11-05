import React, { useReducer } from 'react';
import { Gallery } from './components/Gallery/Gallery';
import './App.css';
import { ThemeContext } from "./components/context/context"


function App() {

  const [state, dispatch] = useReducer(reducer, {theme: "light"});

  function reducer(state) {
    if (state.theme === "light") {
      console.log(state.theme)
      return {theme: "dark"};
    } else {
      console.log(state.theme)
      return {theme: "light"}
    }
  }
  
  return ( 
    <ThemeContext.Provider value={dispatch}>
      <div className={"App " + state.theme}>
        <Gallery />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
