// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css';

import Counter from "./counter"
import FetchMessage from "./fetch-async_to_use"
//import Fetch_async from "./fetch-async_to_use"

function HandleClick(){
  alert("Button Clicked");
}

function WordClick(InputIDName){
  const x = document.getElementById(InputIDName);
  alert(x.value);
}

const SumClick = (num) => {
  const x = document.getElementById(num)
  if (!isNaN(x.value)){
    const newNum = Number(x.value) + 5;
    alert(newNum);
  }
}


function App() {
  return (
    <>
      <FetchMessage></FetchMessage>
      {/* <Fetch_async tag="User List"></Fetch_async> */}
      <label htmlFor="input">Input: </label>
      <input id="input" type="text"/>
      <button onClick={() => WordClick("input")}>Click to watch</button>
      <h3>Vite + React</h3>
      <button onClick={HandleClick}>Click me</button>
      <button onClick={() => alert("2nd Button Clicked")}>Click me too</button>
      <br/>
      <button onClick = {() => SumClick("input")}>Add 5</button>
      <Counter></Counter>
    </>
  )
}

export default App


