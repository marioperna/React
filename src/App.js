import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  }
  render(){
  
    return(
        <div>
          <h1>Counter: {this.state.counter} </h1>
          <button onClick={()=> this.setState({counter: this.state.counter+1})}>
            Increment
          </button>
          <button onClick={()=> this.setState({counter: this.state.counter-1})}>
            Decrement
          </button>       
        </div>
      );
  }
}

export default App;
