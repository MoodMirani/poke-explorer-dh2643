/* eslint-disable @next/next/no-img-element */
export default function PokemonView(props) {
  return (
    <div>
      <h1>
        {props.id} {props.name}
      </h1>
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" 
          + props.id + ".png"
        }
        height={200}
        alt="Pokemon Image"
      />
    </div>
  );
}
