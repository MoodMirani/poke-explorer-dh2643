import PokemonView from "../views/PokemonView";

export default function PokemonPresenter() {
  //const [name, setName] = useState("balbasour");
  //const [number, setNumber] = useState(1);

  return (
    <PokemonView
      //number={useModelProperty(props.model, "pokemonId") || ""}
      id={1}
      name={"balbasour"}
      //setNumber={(x) => props.model.setPokemonId(x)}
    />
  );
}
