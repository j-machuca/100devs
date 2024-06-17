const auth_header = `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`;

class WoWAPI {
  static AUTH_URL = "https://oauth.battle.net/token";

  constructor(CLIENT_ID, CLIENT_SECRET) {
    this.clientId = CLIENT_ID;
    this.clientSecret = CLIENT_SECRET;
    this.auth_header = `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`;
    this.access_token = null;
  }

  authenticate() {
    const getAccessToken = async () => {
      const res = await fetch(WoWAPI.AUTH_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: auth_header,
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
        }),
      });
      if (!res.ok) throw new Error("Error during request");

      const jsonData = await res.json();

      this.access_token = jsonData.access_token;
    };

    getAccessToken();
  }

  getItemDataByID = (e) => {
    e.preventDefault();
    const formValues = new FormData(e.target);

    const itemId = formValues.get("itemId");
    const endpoint = `https://us.api.blizzard.com/data/wow/item/${itemId}`;
    const params = new URLSearchParams({
      namespace: "static-classic-us",
      locale: "en_US",
      access_token: this.access_token,
    });

    async function getData() {
      itemContainer.innerHTML = "";
      const itemDataRes = await fetch(`${endpoint}?${params}`);
      const jsonData = await itemDataRes.json();

      console.log(jsonData.preview_item);
      const { name, quality, item_class: itemClass } = jsonData.preview_item;

      itemContainer.innerHTML = `<p>${name}</p><p>${itemClass.name}</p><p>${quality.name}</p>`;
    }

    getData();
  };
}

const APIService = new WoWAPI(CLIENT_ID, CLIENT_SECRET);

APIService.authenticate();

const form = document.querySelector("form");
form.addEventListener("submit", APIService.getItemDataByID);

const itemContainer = document.querySelector("#itemData");
