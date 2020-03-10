
import React, { Component } from 'react';
import './App.css';
import Display from './Display.jsx';
import CounterButton from './CounterButton'

class App extends Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      count: 0,
    }
  }

  incrementCount = () =>
  {
    this.setState(prevState =>
    {
      return {
        count: prevState.count + 1
      }
    })    
  }

  decrementCount = () =>
  {
    this.setState(prevState =>
      { if(prevState.count > 0 ) {
        return {
          count: Math.max(prevState.count - 1, 0)
        }
      }
        
      })   
  }


  render()
  {
    return <div className="display">
      <CounterButton value={ '-' } handleClick={ this.decrementCount } />
      <Display count={ this.state.count } />
      <CounterButton value={ '+' } handleClick={ this.incrementCount } /> 
    </div>
  }
}

export default App;


//   updateInput = (fieldName) => {
//      console.log('fieldName', fieldName)
//       return (e)=> {
//       const newValue =e.target.value
//       this.setState(prevState=> {
//         return {
//           ...prevState,
//           formValues: {
//               ...prevState.formValues,
//               [fieldName]:newValue

//           }
//         } 
//       })
//     }
//     }

//   render() {
//     // console.log('state', this.state);
//     return (
//       <div> 
//         <MyForm name={this.state.formValues.name} 
//         email={this.state.formValues.email} 
//         password={this.state.formValues.password}
//         updateInput = {this.updateInput}
//          />
//       </div>
//         )
//   }
// }



// class MyForm extends Component{

//   render(){
//     // console.log('propst',this.props)
//     const {name, email, password, updateInput} = this.props
//     return(
//       <div className="App">
//       <input type="text" value={name}  onChange={updateInput('name')} />
//       <input type="email" value={email}  onChange={updateInput('email')}/>
//       <input type="text" value={password} onChange={updateInput('password')} />       
//     </div>
//     )
//   }