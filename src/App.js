import React,{Component} from 'react'

 import Naving from './Naving'
 import Footer from './Footer'
 import Product from './Product'

 class App extends Component {
 
  render() {
     return (
      <div>
    <Naving/>
    <Product/>
    <Footer/>
      </div>
    )
  }
}

export default App
