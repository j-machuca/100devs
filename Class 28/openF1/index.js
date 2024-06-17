class OpenF1Service {
  static HEADERS = {
    "Access-Control-Allow-Origin": "*",
  };

  static getSessions = async () => {
    const ENDPOINT = " https://api.openf1.org/v1/sessions?";

    const today = new Date();

    const startDate = `${today.getFullYear()}-01-01`;
    const endDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

    const res = await fetch(
      `${ENDPOINT}date_start>=${startDate}&date_end<=${endDate}`,
      { headers: OpenF1Service.HEADERS }
    );

    const jsonData = await res.json();

    return jsonData.sort((a, b) => b.session_key - a.session_key);
  };

  static getDriversFromSession = async (e) => {
    if (e.target.dataset.session) {
      const driverContainer = document.querySelector("#session__drivers");

      driverContainer.innerHTML = "";

      const ENDPOINT = `https://api.openf1.org/v1/drivers?session_key=${e.target.dataset.session}`;
      const res = await fetch(ENDPOINT, { headers: OpenF1Service.HEADERS });

      const jsonData = await res.json();

      jsonData.sort((a, b) => a.driver_number - b.driver_number);

      jsonData.map((driver) => {
        let divElem = document.createElement("div");
        divElem.id = driver.name_acronym;
        divElem.classList = "driver";

        divElem.innerHTML = `
          <img src=${driver.headshot_url}  alt="${driver.full_name}"/>
          <p>${driver.driver_number} - ${driver.full_name}</p>
        `;

        driverContainer.appendChild(divElem);
      });
    }
  };
}

const sessionList = document
  .querySelector("ul")
  .addEventListener("click", OpenF1Service.getDriversFromSession);

OpenF1Service.getSessions().then((data) => {
  const ulContainer = document.querySelector("ul");

  data.map((session) => {
    const elem = document.createElement("li");
    // elem.setAttribute("data-session", session.session_key);
    elem.innerHTML = `<a href="#" data-session="${session.session_key}">${session.session_name} - ${session.country_name} - ${session.circuit_short_name}</a>`;
    ulContainer.appendChild(elem);
  });
});
