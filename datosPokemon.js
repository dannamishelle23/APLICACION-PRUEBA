//Primera funcion
const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
        //console.log(data);
            pintarPokemon(data, number);
        })
    .catch(error => {
        console.log(error);
    });
};

//Segunda funcion
const btnSeleccionar = () => 
    {
        let primerPokemon = Math.round(Math.random() * 150);
        let segundoPokemon = Math.round(Math.random() * 150);
        consultarPokemon(primerPokemon,1);
        consultarPokemon(segundoPokemon,2);
    };

btnSeleccionar();

const lista = document.getElementById("listarpokemon")
//Tercera funcion
const pintarPokemon = (data, id) =>
    {
        let item = lista.querySelector(`#pok-${id}`);
        item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
        item.getElementsByTagName("p")[0].innerHTML = data.name;
    }
