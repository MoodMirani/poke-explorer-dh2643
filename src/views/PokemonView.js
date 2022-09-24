export default function PokemonView(props) {
    console.log("Vi är i pokemon view");
  return (
    <div>
      <h1>
        {props.id} {props.name}
      </h1>
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          props.id +
          ".png"
        }
        height={200}
      />
    </div>
  );
}
