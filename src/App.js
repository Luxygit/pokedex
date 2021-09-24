import Logo from './Logo'
import BestPokemon from './BestPokemon'
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from './PokemonMovesSelector'
import PokemonCity from './PokemonCity'

 function logWhenClicked() {
    console.log("Eva is distracting");
  }

const App = () => (
  <div>
    <Logo appName="Pokedex" handleClick={logWhenClicked}/>
    <BestPokemon name='Squirtl' color='blue' abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
    <CaughtPokemon date={new Date().toLocaleDateString()}/>
    <PokemonMovesSelector/>
    <PokemonCity/>
  </div>
)

export default App;
