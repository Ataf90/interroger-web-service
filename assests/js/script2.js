//---------------- methode fetch-------------------
const getPokemons = async () => {
    try {
        const reponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1292");
        const pokemons = await reponse.json();
        return pokemons;
    } catch (error) {
        console.log("Echec de la recuperation de la lists des pokemons");
    }
}
const displayPokemons = async () => {
    const pokemons = await getPokemons();
    console.log("Pokemons : ", pokemons);
    console.log("Results : ", pokemons.results);
}
displayPokemons();
//-------- méthode fetch---------------------
let datasFetch;
const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=1292";
await getDataFetch();
async function getDataFetch() {
    const res = await fetch(urlApi);
    datasFetch = await res.json();
}
//---------------- methode ajax----------------------
const resultAjax = await ajaxTest("https://pokeapi.co/api/v2/pokemon?limit=1292");
console.log("Résultat via Ajax - nécéssite une pormese explicite", resultAjax);
function ajaxTest(url) {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        if (!xhr) {
            alert("Abandon :( Impossible de crée une instance de XMLHTTP");
            return false;
        }
        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    return resolve(JSON.parse(this.response));
                }
            }
        };
        xhr.send();
    });
}
//---------------Methode avec axios----------------------
let datasAxios = await axiosTest();
console.log("Datas via Axios", datasAxios);
async function axiosTest() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292");
    return response.data;
}

const tableau = document.createElement('table');
tableau.classList.add('tableau');
document.body.appendChild(tableau);


const ligne = document.createElement("tr")
ligne.classList.add("ligne");
tableau.appendChild(ligne);

const celule = document.createElement("td");
celule.classList.add("celule");
ligne.appendChild(celule);

for (let index = 0; index < 12; index++) {
    let cellule = document.createElement("div");
    cellule.classList.add('cellule');
    tableau.appendChild(cellule);
    cellule.innerText = datasFetch.results[index].name;
}