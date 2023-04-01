function Navbar(props){
    let controle = props.controle;
    let pokemon = props.pokemon;

    return (
        <>
            <button onClick={controle.Adicionar}>Adicionar ({controle.i}) + 1</button>
            <button onClick={controle.Reduzir}>Reduzir ({controle.i}) - 1</button>
            <h1>{pokemon.name} # {controle.i}</h1>
            <img src={pokemon.sprites.front_default} />
        </>
    );
}

export default Navbar;