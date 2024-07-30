console.log("Hej API-världen");

//Exercise 1:
//getPokemons(); //OK!

//Exercise 2:


getDogs("https://majazocom.github.io/Data/dogs.json");

async function getDogs(url){
    let dogs = await fetchData(url);
    console.log("And the dogs are: ", dogs);
    let dogsSectionRef = document.createElement('section');
    dogsSectionRef.setAttribute('id','dogs');
    document.body.appendChild(dogsSectionRef);
    dogs.forEach((dog) => {
        let dogArticleRef = document.createElement('article');
        dogArticleRef.setAttribute('id',dog.name);
        let h2Ref = document.createElement('h2');
        h2Ref.innerHTML = dog.name;
        dogArticleRef.appendChild(h2Ref);

        let figureRef = document.createElement('figure');
        //figureRef.setAttribute('class',dog.breed);
        figureRef.setAttribute('class','dog');

        let dogImgUrl = getDogImgURL(dog.breed);
        //console.log(dog.breed);
        console.log(dog.img);
        
        let imgRef = document.createElement('img');
        imgRef.setAttribute('src',dog.img);
        figureRef.appendChild(imgRef);
        //figureRef.style.backgroundImage = `url("${dogImgUrl}")`;

        dogArticleRef.appendChild(figureRef);
       
        //document.body.innerHTML += `<p>${dog.name}</p> <img src="${dog.image}"> <br>`;
        //dogsSectionRef.innerHTML += `<p>${dog.name}</p>`;
  
        dogsSectionRef.appendChild(dogArticleRef);
      });
}

function getDogImgURL(breed){

    return 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg';
}

async function fetchData(url){
    let data = [];
    try {
        let response = await fetch(url);
        let data = await response.json();
        //console.log(response);
        //console.log(data);
        return data;
    } catch (error) {
        
    }
    
}



async function getPokemons(){
    let pokemons = await fetchPokemons();
    console.log("And the pokemons are: ", pokemons);
    let pokemonSectionRef = document.createElement('section');
    pokemonSectionRef.setAttribute('id','pokemons');
    document.body.appendChild(pokemonSectionRef);
    pokemons.forEach((pokemon) => {
        //document.body.innerHTML += `<p>${data.name}</p> <img src="${data.image}"> <br>`;
        pokemonSectionRef.innerHTML += `<p>${pokemon.name} ${pokemon.japanese}</p>`;
  
      });
}

async function fetchPokemons() {
  let data = [];
    try {
    let response = await fetch(
      "https://santosnr6.github.io/Data/pokemons.json"
    );
    //console.log(response);
    data = await response.json();
    //console.log(data);

    
  } catch (error) {
    console.error();
  }
  return data;
}


