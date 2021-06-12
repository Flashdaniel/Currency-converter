import React, {Component} from 'react'
// import './App.css';
// import Hero from './components/Hero/Hero';

// const App = () => {
//   return (
//     <div className="App">
//       <Hero />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props) 
    this.currencies = ["AUD", 'CAD', 'CHF', 'CNY', 'INR', 'USD', "EUR", 'GBP', 'JPY', 'NZD']
    this.cached = {}
    this.state = {
      base: "USD",
      other: "EUR",
      value: 0,
      converted: 0
    }
  }

  makeSelection = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }, this.reCalculate)
  }

  changeValue = (event) => {
    this.setState({
      value: event.target.value,
      converted: null
    }, this.reCalculate)
  }

  reCalculate = () => {
    const value = parseFloat(this.state.value)

    if (isNaN(value)) {
      return;
    }

    if (this.cached[this.state.base] !== undefined && Date.now() - this.cached[this.state.base].timestamp < 1000 * 60) {
      this.setState({
        converted: this.cached[this.state.base].rates[this.state.other] * value
      })
      return;
    }

    // console.log(this.cached[this.state.base])

    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
    .then(response => response.json())
    .then(data => {
      this.cached[this.state.base] = {
        rates: data.rates,
        timestamp: Date.now()
      }
      this.setState({
        converted: data.rates[this.state.other] * value
      })
    })
  }
 
  render () {
    return (
      <div>
        <div>
          <select name="base" value={this.state.base} onChange={this.makeSelection}>
            {this.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
          </select>
          <input onChange={this.changeValue} value={this.state.value} />
        </div>
        <div>
        <select name="other" value={this.state.other} onChange={this.makeSelection}>
          {this.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
        </select>
        <input disabled={true} value={this.state.converted === null? 0 : this.state.converted} />
      </div>
      </div>
    );
  }
}

export default App;
