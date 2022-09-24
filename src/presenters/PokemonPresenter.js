import PokemonView from "../views/PokemonView";
import { useState } from "react";
export default function PokemonPresenter(model) {
  const [name, setName] = useState("balbasour");
  const [number, setNumber] = useState(1);
  console.log("Vi är i Pokemon Presenter");

  const updateImage = () => {
    setNumber(model.getNumber())
    setName("Pokemon Name")
   }
    
  
  model.addObservers(updateImage)

  return (
    <PokemonView
      //number={useModelProperty(props.model, "pokemonId") || ""}
      id={number}
      name={name}
      //setNumber={(x) => props.model.setPokemonId(x)}
    />
  );
}
