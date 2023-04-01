import Tipo from "./tipo";
import Ability from './ability';

function PokemonInfo(props){
    let pokemon = props.pokemon;

    return (
        <>
            <p>Peso: {pokemon.weight}</p>
            <p>Altura: {pokemon.height}</p>
            <ul>
                { pokemon.types.map(tipo => <Tipo tipo={tipo} />) }
            </ul>
            <ul>
                { pokemon.abilities.map(ability => <Ability ability={ability.ability} />) }
            </ul>
        </>
    )
}

export default PokemonInfo;