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

function viewDestinations(destination) {
  console.log(destination);
  document.querySelector(
    "h1"
  ).textContent = `${destination.city} | ${destination.country}`;
  document.querySelector(
    ".background"
  ).src = `https://kea21s-6eb0.restdb.io/media/${destination.imgcitybigpc}`;
  document.querySelector(".city_name").textContent = destination.city;
  document.querySelector(".big_des").textContent = destination.citydescription;
  document.querySelector(".time_zone").textContent = destination.time;
  document.querySelector(".money").textContent = destination.currency;
  document.querySelector(".water").textContent = destination.waterprice;
  document.querySelector(".coffee").textContent = destination.coffeeprice;
  document.querySelector(".beer").textContent = destination.beerprice;
  document.querySelector(".lunch").textContent = destination.lunchprice;
  document.querySelector(".see_map").href = destination.maplocation;
  document.querySelector(
    ".map"
  ).src = `https://kea21s-6eb0.restdb.io/media/${destination.imgcountrymap}`;
}
