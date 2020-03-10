import React, { Component } from 'react';
import './App.css';
import Child from './Child.jsx';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      childName : "Ally",
      color:'red'
    }  
  }
  handleOnClick= ()=> {
    this.setState({
      color:'green'
    })
  }
  render() {
    return (
      <div className="App">
        <h3 style={{backgroundColor:this.state.color}}>{this.state.childName}</h3>
        <Child childName={this.state.childName} handleOnClick={this.handleOnClick}/>
    </div>
    );
  }
}

export default App;
