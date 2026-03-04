let cache = {}
console.log("pokemonImage element =", document.getElementById("pokemonImage"));

function findInfo(){

    let name = document.getElementById("input").value

    if(cache[name]){
        showPokemon(cache[name])
        return
    }

    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(response => response.json())
        .then(data => {

        cache[name] = data
        showPokemon(data)

        })
}

function showPokemon(data){
    console.log(data);
    console.log(document.getElementById("pokemonImage"));

    document.getElementById("pokemonImage").src = data.sprites.front_default;
    document.getElementById("pokemonSound").src = data.cries.latest;
    loadMoves(data.moves);
}

function loadMoves(moves){

    let dropdowns = [
        document.getElementById("move1"),
        document.getElementById("move2"),
        document.getElementById("move3"),
        document.getElementById("move4")
    ]

    dropdowns.forEach(menu => {

        menu.innerHTML = ""

    })

    moves.forEach(m => {

        let moveName = m.move.name

        dropdowns.forEach(menu => {

            let option = document.createElement("option")

            option.textContent = moveName

            menu.appendChild(option)

        })

    })

}

function add(){

    let team = document.getElementById("team")

    let container = document.createElement("div")
    container.className = "teamMember"

    let img = document.getElementById("pokemonImage").src

    let m1 = document.getElementById("move1").value
    let m2 = document.getElementById("move2").value
    let m3 = document.getElementById("move3").value
    let m4 = document.getElementById("move4").value

    container.innerHTML = `
        <img src="${img}" width="80">

        <ul>
            <li>${m1}</li>
            <li>${m2}</li>
            <li>${m3}</li>
            <li>${m4}</li>
        </ul>
    `

    team.appendChild(container)

}