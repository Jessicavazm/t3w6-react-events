import React, { Component } from 'react';

export default class PokemonCard extends Component {
    constructor(){
        super();

        this.state = {
            pokemonName: "",
            pokemonImage: ""
        }
    }

    async componentDidMount(){
        let randomNumber = Math.ceil(Math.random() * 1025);
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        let data = await response.json();

        this.setState({
            pokemonName: data.name,
            pokemonImage: data.sprites.front_default
        })
    }

    render(){
        return(
            // Group the elements in block
            <div className='pokemonCard'>
                {/* Receive the data from the API */}
                {/* We can create a loading content (Conditional rendering) */}
                {
                    // Ternary Operation 
                    // Condition check
                    this.state.pokemonName && this.state.pokemonImage ?
                    // If its true, render this content
                    <>
                        <h1>{this.state.pokemonName}</h1>
                        <img src={this.state.pokemonImage} />
                    </>
                    :
                    // If its false, render this content
                    <h1>Loading...</h1>
                }
            </div>
        )
    }
}