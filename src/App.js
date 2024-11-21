// Import React to work with React
// Import PokemonCard from PokemonCard Component
import React, {Component} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

// Export class, function or component you need to export it to the main file
// export default App can be used towards the end to export it
export default class App extends Component {
  constructor(){ // class needs a constructor method to initialise the class
    super(); // super() is needed to call the constructor's functions and methods
    // state variable defines the component state at some specific period
    this.state = { 
      numberOfPokemon: 6
    }
  }

  exampleFunc1(){
    console.log("First Event Click");
  }

  exampleFunc2(){
    console.log("Second Event Click");
  }

  // Use setState method to update/ change variable state value
  // Use arrow functions when creating functions inside classes in React
  decreasePokemonNumber = () => {
    if (this.state.numberOfPokemon > 0){
      this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
    }
  }

  increasePokemonNumber = () => {
    this.setState({numberOfPokemon: this.state.numberOfPokemon + 1});
  }
  // Render function returns JSX component
  // Render needs to be called in order to use the return function in class
  // Use curly braces when you want to have a JS code inside HTML elements
  // EventListener => camelCase, {} and 'this' kw are used
  // Arrow fn when you want to have multiple functions for Event Listener, add () on each fn
  // If only one function in event listener, don't call the ()
  render(){
    return(
      <>
        <h1>Hello World</h1>
        <p>My Pokemon Team</p>
        <h5>Number of Pokemon: {this.state.numberOfPokemon} </h5> 
        <button onClick={this.decreasePokemonNumber}>Decrease Pokemon Amount</button>
        <button onClick={ () => {
          this.exampleFunc1();
          this.exampleFunc2();
          this.increasePokemonNumber();
        } }>Increase Pokemon Amount</button>
        {
          // Creates an array of given length
          Array(this.state.numberOfPokemon)
          // Fills the array with null values
          .fill(null)
          // On the empty array, map and place the component there.
          .map((element, index) => {
            return <PokemonCard key={index}/>
          })
        }
      </>
    ) 
  }
}

