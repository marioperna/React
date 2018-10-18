import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    random:0
  }
  render(){
    var min = 1;
    var max = 100;
    var rand =  min + (Math.random() * (max-min));
  
  
    return(
        <div>
        
          <h1>Counter: {this.state.counter} </h1>
          <h2>Counter: {this.state.random} </h2>
          <button onClick={()=> this.setState({counter: this.state.counter+1})}>
            Increment
          </button>
          <button onClick={()=> this.setState({counter: this.state.counter-1})}>
            Decrement
          </button>
          <button onClick={()=> this.setState({random: rand})}>
            Random
          </button>        
        </div>
      );
  }
}

export default App;
