import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Memory from "./Memory/Memory.js"
import gameobj from "./Memory.json"


class App extends Component {
  state ={
    gameobj,
    stats:[ {
      wins: 0,
      loses: 0,
      current:0
    }]
  }

clickHandler = index => {
 const gameobj =[...this.state.gameobj]
 const stats =[...this.state.stats]

 if(gameobj[index].clicked === true){
   alert("loser")
   stats[0].loses ++
   stats[0].current = 0
   this.reset(gameobj)
   this.setState({gameobj: gameobj , stats:stats})


 }
 else{
 gameobj[index].clicked = true;
 stats[0].current ++
 this.shuffle(gameobj)
 this.setState({gameobj: gameobj ,stats:stats})
 }

 if(stats[0].current === 8){
  alert("Winner")
  stats[0].wins ++
  stats[0].current = 0
this.reset(gameobj)
  this.setState({gameobj: gameobj ,stats:stats})
 }
}



reset = (array) =>{
  for(let i = 0; array.length > i ; i++){
    array[i].clicked = false
  }
  return array;
}

//Fisher–Yates shuffle!  
shuffle = (array) => {
  let counter = array.length;
  while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
}



  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Memory Game! </h1>
          <h2> Wins:{this.state.stats[0].wins} Loses:{this.state.stats[0].loses} </h2>
        </header>
        {this.state.gameobj.map((gameobj,index) => (
          <Memory 
           
            clickHandler ={() => this.clickHandler(index)}
            id={gameobj.id}
            key={gameobj.id}
            clicked={gameobj.clicked}
            image={gameobj.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
