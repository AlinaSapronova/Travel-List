import './App.css';
import { Component } from "react";
import { Test } from './Test';
// import list from "./img.avif"
// import travel from "./travel.avif"

 class App extends Component{
  render(){
  return (
    <div className='container'>
      <form>
        <div>
          {/* <img src={list} alt="grocery" width={250}/> */}
          <h1>Grocery List</h1>
        </div>
      <Test/>
      <div>
        {/* <img src={travel} alt="grocery" width={250} height={300}/> */}
      </div>
      </form>
  </div>
  );
}
 }

export default App;
