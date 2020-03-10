
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      formValues: {
        name: '',
        email: '',
        password :''
      }
   
    }  
  }

  updateInput = (fieldName) => {

     console.log('fieldName', fieldName)
      return (e)=> {
      const newValue =e.target.value
      this.setState(prevState=> {
        return {
          ...prevState,
          formValues: {
              ...prevState.formValues,
              [fieldName]:newValue
            
          }
        } 
      })
    }
    }

  render() {
    // console.log('state', this.state);
    return (
      <div> 
        <MyForm name={this.state.formValues.name} 
        email={this.state.formValues.email} 
        password={this.state.formValues.password}
        updateInput = {this.updateInput}
         />
      </div>
        )
  }
}

export default App;

class MyForm extends Component{
  
  render(){
    // console.log('propst',this.props)
    const {name, email, password, updateInput} = this.props
    return(
      <div className="App">
      <input type="text" value={name}  onChange={updateInput('name')} />
      <input type="email" value={email}  onChange={updateInput('email')}/>
      <input type="text" value={password} onChange={updateInput('password')} />       
    </div>
    )
  }
}