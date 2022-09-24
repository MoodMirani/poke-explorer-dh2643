// const useModelProperty=(a,b,d=React.useEffect,z="addObserver", p=React.useState())=>(d(()=>a[z](_=>p[1](_[b])),[]),p[0]);

// function PokemonIdPresenter(props){
//     return <NumberEditor number={useModelProperty(props.model, "pokemonId")||""} setNumber={x=>props.model.setPokemonId(x)} />;
// }
// function PokemonDataPresenter(props){
//     const id= useModelProperty(props.model, "pokemonId");
//     const data=useModelProperty(props.model, "pokemonDetails");
//     const error=useModelProperty(props.model, "pokemonError");
//     return promiseNoData(id, data, error) || <PokemonView poke={data} />;
// }

// function NumberEditor(props){
//     return <div>
// 	<input type="number" value={props.number} onInput={e=> props.setNumber(e.target.value*1)} min={1} max={900}/>
// 	</div>;
// }
