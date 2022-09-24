function PokemonView(props){
    return <div>
	<h1>{props.poke.id} {props.poke.name}</h1>
	<img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+props.poke.id+".png"} height={200} />
	</div>;
}
