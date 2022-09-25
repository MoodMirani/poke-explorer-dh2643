import PokemonView from "../views/PokemonView";
import { useState, useEffect } from "react";
export default function PokemonPresenter({ model }) {
  const [name, setName] = useState();
  const [number, setNumber] = useState(1);
  console.log("Vi är i Pokemon Presenter");

  const getNameFromAPI = () => {
    let url = new URL("https://pokeapi.co/api/v2/pokemon/" + model.number);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);
        setName(data.name);

        // model.name = data.name;
        //model.setName(data.name)
        //console.log(data.name);
        //console.log(name);
      });
  };

  const updateImage = () => {
    setNumber(model.getNumber());
    getNameFromAPI();
  };

  useEffect(() => {
    model.addObservers(updateImage);
    updateImage(); //First call into observer to initiate component state...
  }, []);

  return (
    <PokemonView
      //number={useModelProperty(props.model, "pokemonId") || ""}
      id={number}
      name={name}
      //setNumber={(x) => props.model.setPokemonId(x)}
    />
  );
}
