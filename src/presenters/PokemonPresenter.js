import PokemonView from "../views/PokemonView";
import { useState, useEffect } from "react";
export default function PokemonPresenter({ model }) {
  const [name, setName] = useState(model.getName());
  const [number, setNumber] = useState(model.getNumber());
  console.log("Vi är i Pokemon Presenter");

  const getNameFromAPI = () => {
    let url = new URL("https://pokeapi.co/api/v2/pokemon/" + model.number);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);
        model.name = data.name;
        //console.log(data.name);
        //console.log(name);
      });
  };

  const updateImage = () => {
    setNumber(model.getNumber());
    setName(getNameFromAPI);
  };

  useEffect(() => {
    model.addObservers(updateImage);
    updateImage(); //First call into observer to initiate component state...
  }, []);

  return (
    <PokemonView
      //number={useModelProperty(props.model, "pokemonId") || ""}
      id={model.number}
      name={model.name}
      //setNumber={(x) => props.model.setPokemonId(x)}
    />
  );
}
