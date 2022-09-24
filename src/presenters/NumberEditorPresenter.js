import { useState } from "react";
import NumberEditorView from "../views/NumberEditorView";

export default function NumberEditorPresenter() {
  const [number, setNumber] = useState(0);

  function changedInputNumberCB(event) {
    //e.preventDefault();
    setNumber(event.target.value);
    console.log(event.target.value);

    //Update model here
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
