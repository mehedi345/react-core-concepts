import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Sakib', 'Joshim', 'Salman shah'];
  const products = [{name: 'Photoshop', price:'99.99'},{name:'Ilustrator', price:'60.99'}]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
        </ul>
        <Counter></Counter>
        <Users></Users>
        <Person name={nayoks[0]} nayika="bubli"></Person>
        <Person name={nayoks[1]} nayika="moushumi"></Person>
        <Person name={nayoks[2]} nayika="shabnoor"></Person>
        <Product product ={products[0]}></Product>
        <Product product ={products[1]}></Product>
       
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
function Users(){
  const [user, setUser] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {user.length}</h3>
      <ol>
      {
        user.map( user => <li>{user.name}- {user.email} : {user.phone}</li>)
      }
      </ol>
    
      
    </div>
  )
}
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    float:'left'

  }
  const {name, price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h2>{name} </h2>
      <h1> {price} </h1>
      <button>Buy Now</button>
    </div>
  )
  
}
function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = ()=>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}
export default App;
