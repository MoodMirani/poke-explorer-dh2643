import NumberEditorView from "../views/NumberEditorView";

export default function NumberEditorPresenter(props) {
  function changedInputNumberCB() {
    console.log("Hi");
  }
  return (
    <NumberEditorView
      //number={useModelProperty(props.model, "pokemonId") || ""}
      number={5}
      changedInputNumberCB={changedInputNumberCB}
      //setNumber={(x) => props.model.setPokemonId(x)}
    />
  );
}
