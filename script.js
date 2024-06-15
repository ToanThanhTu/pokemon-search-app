const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

const nameSpan = document.getElementById("pokemon-name");
const idSpan = document.getElementById("pokemon-id");
const weightSpan = document.getElementById("weight");
const heightSpan = document.getElementById("height");
const imgContainter = document.querySelector(".image-container");
const typesContainer = document.getElementById("types");

const hpStat = document.getElementById("hp");
const attackStat = document.getElementById("attack");
const defenseStat = document.getElementById("defense");
const specialAttackStat = document.getElementById("special-attack");
const specialDefenseStart = document.getElementById("special-defense");
const speedStat = document.getElementById("speed");

const displayPokemonData = (pokemon) => {
    const { name, id, weight, height, sprites, types, stats } = pokemon;

    nameSpan.textContent = name.toUpperCase();
    idSpan.textContent = `#${id}`;
    weightSpan.textContent = `Weight: ${weight}`;
    heightSpan.textContent = `Height: ${height}`;
    imgContainter.innerHTML = `<img id="sprite" src="${sprites.front_default}" />`;

    typesContainer.innerHTML = '';
    types.forEach(item => {
        const typeName = item.type.name;
        typesContainer.innerHTML += `<span class="type ${typeName}">${typeName.toUpperCase()}</span>`;
    });

    stats.forEach(item => {
        switch (item.stat.name) {
            case 'hp':
                hpStat.textContent = item.base_stat;
            case 'attack':
                attackStat.textContent = item.base_stat;
            case 'defense':
                defenseStat.textContent = item.base_stat;
            case 'special-attack':
                specialAttackStat.textContent = item.base_stat;
            case 'special-defense':
                specialDefenseStart.textContent = item.base_stat;
            case 'speed':
                speedStat.textContent = item.base_stat;
            default:
                console.log("Could not find stat");
        }
    });
}

const search = () => {
    let pokemon = {};

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`)
    .then(res => res.json())
    .then(data => {
        pokemon = data;
        displayPokemonData(pokemon);
    })
    .catch(err => alert("Pokémon not found"));
}

searchBtn.addEventListener("click", search);