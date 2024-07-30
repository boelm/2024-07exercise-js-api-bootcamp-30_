console.log("Hej API-världen");

let pokemons = fetchPokemons();
console.log("And the pokemons are: ", pokemons);

async function fetchPokemons() {
  let data = [];
    try {
    let response = await fetch(
      "https://majazocom.github.io/Data/pokemons.json"
    );
    console.log(response);
    //console.log(response.json());
    data = await response.json();
    console.log(data);

    // data.forEach((movie) => {
    //   document.body.innerHTML += `${movie.title} - ${movie.imdbid} <br>`;
    // });
  } catch (error) {
    console.error();
  }
  return data;
}
