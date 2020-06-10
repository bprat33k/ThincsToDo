import React from 'react';
import './App.css';
import './App.sass'
import Header from './Header'
import Content from './Content'


function App() {
  return(
    <div className="wrapper">
      <div className= "card frame">
        <Header />
        <Content />
      </div>
    </div>
  )
}
  

export default App;
