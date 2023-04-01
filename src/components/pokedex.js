import Navbar from "./navbar";
import PokemonInfo from "./pokemonInfo";

function Pokedex(props){
    return (
        <>
            <Navbar pokemon={props.pokemon} controle={props.controle} />
            <PokemonInfo pokemon={props.pokemon} />
        </>
    )
}

export default Pokedex;