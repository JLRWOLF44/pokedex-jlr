function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc: "",
    },
  ];

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <figure key={index}>
          {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
        </figure>
      ))}
    </div>
  );
}

export default PokemonCard;
