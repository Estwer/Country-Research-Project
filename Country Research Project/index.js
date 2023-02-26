//? api linki
// https://restcountries.com/v3.1/all 

async function getApi() {
  const url = "https://restcountries.com/v3.1/all";
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {getCountry(data);});
}

//? ALTTAKİ VEYA ÜSTTEKİNİ KULLANABİLİRSİNİZ

// async function getApi() {
//   const url = await fetch("https://restcountries.com/v3.1/all");
//   const res = await url.json();
//   getCountry(res);
// }

function getCountry(element) {
  element.forEach((data) => {
    let countryName = data.name.common;
    let countryFlag = data.flags.png;
    let countryCapital = data.capital;
    let countryPopulation = data.population;
    create(countryName, countryFlag, countryCapital, countryPopulation);
  });
}

function create(name, flag, capital, population) {
  let li = document.createElement("li");
  document.querySelector("ul").appendChild(li);
  li.innerHTML = `
    <h1 class="countryName">${name}</h1>
    <h2>${capital}</h2>
    <img src="${flag}">
    <h2>Population: ${population}</h2>
    `;
}

getApi();

const search = document.querySelector("input");
search.addEventListener("input", () => {
  const value = search.value[0].toUpperCase() + search.value.slice(1);
  const characterName = document.querySelectorAll(".countryName");
  characterName.forEach((element) => {
    element.parentElement.style.display = "block";
    if (!element.innerText.includes(value)) {
      element.parentElement.style.display = "none";
    }
  });
});
