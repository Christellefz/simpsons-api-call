import React from 'react'
import './App.css';
import QuoteCards from './components/QuoteCards';
import axios from 'axios'

class App extends React.Component {
  state ={
    simpsons:[]
  }
  handleChange=() => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // eslint-disable-next-line no-undef
    .then(res =>console.log(res) || this.setState({ simpsons: res.data[0]}))
  }
  componentDidMount(){
  this.handleChange()
  }

  render(){
    const {simpsons}= this.state
    return (
    <div className="App">
    <QuoteCards simpsons={simpsons}/>
    <button type="button" onClick={this.handleChange}>Change Simpson</button>
    </div>
  );
}
}

export default App;
