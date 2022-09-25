import { useState } from "react";
import NumberEditorView from "../views/NumberEditorView";

export default function NumberEditorPresenter({ model }) {
  const [number, setNumber] = useState(1);

  function changedInputNumberCB(event) {
    //e.preventDefault();
    setNumber(event.target.value);

    //Update model here
    model.setNumber(event.target.value);
  }
  return (
    <NumberEditorView
      //number={useModelProperty(props.model, "pokemonId") || ""}
      number={number}
      changedInputNumberCB={changedInputNumberCB}
      //setNumber={(x) => props.model.setPokemonId(x)}
    />
  );
}
