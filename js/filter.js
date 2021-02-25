const url = "https://kea21s-6eb0.restdb.io/rest/trawell";

const options = {
  headers: {
    "x-apikey": "603651875ad3610fb5bb65e9",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => listCities(data));

function listCities(data) {
  data.forEach(showCity);
}

function showCity(city) {
  console.log(city);
  const template = document.querySelector("#theList").content;
  const copy = template.cloneNode(true);
  copy.querySelector(
    "img"
  ).src = `https://kea21s-6eb0.restdb.io/media/${city.squarepicture}`;
  document.querySelector("img").alt = `Picture of ${city.city}`;
  copy.querySelector(".category").textContent = city.continent;
  copy.querySelector(".category").textContent = city.country;
  copy.querySelector(".name").textContent = city.city;
  copy.querySelector("p").textContent = city.shortdescription;
  copy.querySelector("a").href = `city_page.html?id=${city._id}`;
  const parent = document.querySelector("#flex-boxes");
  parent.appendChild(copy);
}
