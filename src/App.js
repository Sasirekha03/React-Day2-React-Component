import React,{Component} from 'react'
//import Rowing from './Rowing'
//import Checking from './Checking'
//import Naving from './Naving'
//import Material from './Material'
//import Checkbox from './Checkbox'
//import NewComp from './NewComp';
//import Inline from './Inline'
//import External from './External'
//import List from './List'
//import List2 from './List2'
//import ErrorBoundary from './ErrorBoundary';
//import One from './One';
//import Three from './Three';
//import Two from './Two';
 //import './App.css'
 //import Ifelse from './Ifelse'
 //import Ternary from './Ternary'
 //import Coffee from './Coffee'
 import Naving from './Naving'
 import Footer from './Footer'
 import Product from './Product'
 //import Hooks from './Hooks'
 class App extends Component {
  /*styles={
    fontStyle:'bold',
    fontSize: '50px',
    color:'pink',
    
};*/
  render() {
     return (
      <div>
      {/*<h1 style={this.styles}> Now we've entered into state's concept</h1>
      <NewComp/>
      <Inline/>
     <External primary={true}/>
     <List/>
     <List2/>
     <Naving/>
     <Material/>
     <Checkbox/>
     <Checking/>
     <Rowing/>
    <ErrorBoundary>
    <One/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Two/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Three/>
     </ErrorBoundary>
     <Ifelse/>
     <Ternary/>
     
     <Hooks/>
     <Coffee/>
    */}
    <Naving/>
    <Product/>
    <Footer/>
      </div>
    )
  }
}

export default App
