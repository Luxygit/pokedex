import { useState } from 'react'

// const pokemonNames = [
//   "Dragonair", 
//   "Dragonite", 
//   "Steelix", 
//   "Solrock", 
//   "Regirock", 
//   "Regice", 
//   "Registeel",
// ]


const CaughtPokemon = (props) => {
  const [ caught, setCaught ] = useState([])
  const [pokemonNameInput, setPokemontNameInput] = useState("");

  // PSEUDOCODE SOLUTION
  // catchPokemon adds a random pokemon to the state
  const catchPokemon = () => {
    // pick a random number between 0 and the number of pokemon names we have
    //let randomPosition = Math.floor(Math.random() * pokemonNames.length)
    // get the pokemon name at that position in the pokemonNames array
    //const randomPokemon = pokemonNames[randomPosition]
    // add that pokemon name to the caught array in the state
    const newCaught = caught.concat(pokemonNameInput)
    
    setPokemontNameInput("")

    setCaught(newCaught)
  }
  // we could inline this; no need to be separate from the return bit
function handleInputChange(event) {
  setPokemontNameInput(event.target.value)
}

  return (
    
      <span>Caught {caught.length} Pokémon on {props.date}  
    <ul>
        { caught.map((name, index) => ( <li key={index}>{name}</li> ))}
    </ul>
    <input type="text" value={pokemonNameInput} onChange = {handleInputChange}/>
    <button onClick={catchPokemon}>Catch a Pokemon</button>
    </span>
  )
}



export default CaughtPokemon
