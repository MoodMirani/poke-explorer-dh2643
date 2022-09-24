import { Fragment } from "react";

export default function NumberEditorView({ number, changedInputNumberCB }) {
  return (
    <div>
      <input
        type="number"
        value={number}
        onInput={changedInputNumberCB}
        min={1}
        max={900}
      />
    </div>
  );
}
