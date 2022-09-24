import PokemonView from "../views/PokemonView";
import { useState, useEffect } from "react";
export default function PokemonPresenter({model}) {
  const [name, setName] = useState(model.getName());
  const [number, setNumber] = useState(model.getNumber());
  console.log("Vi är i Pokemon Presenter");

  const updateImage = () => {
    setNumber(model.getNumber())
    setName("Pokemon Name")
   }

  useEffect(() => {
    model.addObservers(updateImage)
  }, [])
  
  return (
    <PokemonView
      //number={useModelProperty(props.model, "pokemonId") || ""}
      id={number}
      name={name}
      //setNumber={(x) => props.model.setPokemonId(x)}
    />
  );
}
