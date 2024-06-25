// Get input field and search button from the DOM
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

// Get DOM elements for displaying Pokémon details
const nameSpan = document.getElementById("pokemon-name");
const idSpan = document.getElementById("pokemon-id");
const weightSpan = document.getElementById("weight");
const heightSpan = document.getElementById("height");
const imgContainter = document.querySelector(".image-container");
const typesContainer = document.getElementById("types");

// Get DOM elements for displaying Pokémon stats
const hpStat = document.getElementById("hp");
const attackStat = document.getElementById("attack");
const defenseStat = document.getElementById("defense");
const specialAttackStat = document.getElementById("special-attack");
const specialDefenseStart = document.getElementById("special-defense");
const speedStat = document.getElementById("speed");

// Function to display Pokémon data on the page
const displayPokemonData = (pokemon) => {
    // Destructure the pokemon object to extract needed properties
    const { name, id, weight, height, sprites, types, stats } = pokemon;

    // Display basic Pokémon information
    nameSpan.textContent = name.toUpperCase();
    idSpan.textContent = `#${id}`;
    weightSpan.textContent = `Weight: ${weight}`;
    heightSpan.textContent = `Height: ${height}`;
    imgContainter.innerHTML = `<img id="sprite" src="${sprites.front_default}" />`;

    // Clear previous types and display current Pokémon types
    typesContainer.innerHTML = '';
    types.forEach(item => {
        const typeName = item.type.name;
        typesContainer.innerHTML += `<span class="type ${typeName}">${typeName.toUpperCase()}</span>`;
    });

    // Display Pokémon stats
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

// Function to search for a Pokémon
const search = () => {
    let pokemon = {};

    // Fetch Pokémon data from the API
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`)
    .then(res => res.json()) // Parse the response as JSON
    .then(data => {
        pokemon = data; // Store fetched Pokémon data
        displayPokemonData(pokemon); // Display fetched Pokémon data
    })
    .catch(err => alert("Pokémon not found, error: " + err)); // Alert if Pokémon is not found or an error occurs
}

// Add event listener to the search button to initiate search on click
searchBtn.addEventListener("click", search);