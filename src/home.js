import Pokedex from "./components/pokedex";
import { useParams } from "react-router-dom";
import React from "react";

export default function Home(){
    const { pokemonId } = useParams();
    const [pokemon, setPokemon] = React.useState({});
    const [i, setI] = React.useState(1);

    function Carregar(){
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
        .then(res => res.json())
        .then(data => {
        setPokemon(data)
        });
    }

    function Adicionar(){
        setI(i + 1);
    }

    function Reduzir(){
        if(i > 1)
        setI(i - 1);
    }

    React.useEffect(()=>{
        Carregar();
    },[i]);

    React.useEffect(()=>{
        Carregar();
    },[]);


    if(pokemon.name){
        return (
        <>
            <Pokedex className="row" pokemon={pokemon} controle={{ pokemonId, Adicionar, Reduzir }}/>
        </>
        )
    }
    else
        return <button onClick={Carregar}>Carregar</button>
}