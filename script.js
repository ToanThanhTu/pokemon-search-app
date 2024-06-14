const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id}")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

const search = () => {
    
}

searchBtn.addEventListener("click", search);