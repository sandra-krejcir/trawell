const url =
  "https://kea21s-6eb0.restdb.io/rest/trawell/6033c9b66afd463c000055c7";

const options = {
  headers: {
    "x-apikey": "603651875ad3610fb5bb65e9",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => viewDestinations(data));

function viewDestionations(destination) {
  console.log(destination);
  document.querySelector(
    "h1"
  ).textContent = `${destination.city} | ${destination.country}`;
}
