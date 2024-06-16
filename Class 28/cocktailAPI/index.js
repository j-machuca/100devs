class CocktailService {
  static ENDPOINT = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
  constructor() {}

  static getCocktails(query) {
    const getData = async (query) => {
      const params = new URLSearchParams({ s: query }).toString();

      // Make fetch request
      const response = await fetch(`${this.ENDPOINT}${params}`);
      // parse response to json
      const result = await response.json();

      return result["drinks"] ?? null;
    };
    return getData(query);
  }
}

const queryInput = document.querySelector("#query");
const form = document.querySelector("form");
const cocktailContainer = document.querySelector("#cocktails__container");

function onSubmitHandler(e) {
  e.preventDefault();
  cocktailContainer.innerHTML = "";
  // const formData = new FormData(e.currentTarget);
  // console.log(formData);
  const query = queryInput.value;
  CocktailService.getCocktails(query).then((data) => {
    if (!data) {
      cocktailContainer.innerHTML =
        "<h3>No results found... try another drink</h3>";
    } else {
      data.forEach((element) => {
        const cocktail = new Cocktail(element);
        cocktail.render(cocktailContainer);
      });
    }
  });
  queryInput.value = "";
}

class Cocktail {
  constructor(obj) {
    this.drinkId = obj["idDrink"];
    this.strAlcoholic = obj["strAlcoholic"];
    this.name = obj["strDrink"];
    this.thumbnail = obj["strDrinkThumb"];
    this.instructions = obj["strInstructions"];
  }

  render(parent) {
    const elem = document.createElement("div");

    elem.innerHTML = `<img src="${this.thumbnail}" width="100px" height="100px"/> <h3>${this.name}</h3><p>Type: ${this.strAlcoholic}</p> <p>${this.instructions}</p>`;
    parent.appendChild(elem);
  }
}

form.addEventListener("submit", onSubmitHandler);
