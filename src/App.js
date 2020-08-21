import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Sakib', 'Joshim', 'Salman shah']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person name={nayoks[0]} nayika="bubli"></Person>
        <Person name={nayoks[1]} nayika="moushumi"></Person>
        <Person name={nayoks[2]} nayika="shabnoor"></Person>
      </header>
    </div>
  );
}
function Person(props){

  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px'
  }
   return (
     <div style={personStyle}>
       <h1>name: {props.name}</h1>
        <h2>hero of {props.nayika}</h2>
      </div>)
  
}

export default App;
