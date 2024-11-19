import React, { Component } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

export default class App extends Component {
  constructor(){
    super();

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

  decreasePokemonNumber = () => {
    if (this.state.numberOfPokemon > 0){
      this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
    }
  }

  increasePokemonNumber = () => {
    this.setState({numberOfPokemon: this.state.numberOfPokemon + 1});
  }

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
          // fills the array with null values
          .fill(null)
          // on the empty array, map and place the component there.
          .map((element, index) => {
            return <PokemonCard key={index}/>
          })
        }
      </>
    ) 
  }
}

