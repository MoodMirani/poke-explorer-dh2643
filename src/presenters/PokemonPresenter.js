import PokemonView from "../views/PokemonView";
import { useState, useEffect } from "react";
export default function PokemonPresenter({ model }) {
  const [name, setName] = useState();
  const [number, setNumber] = useState(1);

  const getNameFromAPI = () => {
    let url = new URL("https://pokeapi.co/api/v2/pokemon/" + model.number);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
      });
  };

  const updateImage = () => {
    setNumber(model.getNumber());
    getNameFromAPI();
  };

  useEffect(() => {
    model.addObservers(updateImage);
    updateImage(); //First call into observer to initiate component state...
  });

  return (
    <PokemonView
      id={number}
      name={name}
    />
  );
}
