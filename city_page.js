const url =
  "https://kea21s-6eb0.restdb.io/rest/trawell/6033d2ac6afd463c000056cf";

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
  document.querySelector(
    ".land1 img"
  ).src = `https://kea21s-6eb0.restdb.io/media/${destination.imglandmark1}`;
  document.querySelector(
    ".land1 img"
  ).alt = `Picture of ${destination.landmarkname1}`;
  document.querySelector(
    ".land1 h4"
  ).textContent = `${destination.attractiontype1} | ${destination.location1}`;
  document.querySelector(".land1 h3").textContent = destination.landmarkname1;
  document.querySelector(".land1 p").textContent =
    destination.landmdescription1;
  document.querySelector(
    ".land2 img"
  ).src = `https://kea21s-6eb0.restdb.io/media/${destination.imglandmark2}`;
  document.querySelector(
    ".land2 img"
  ).alt = `Picture of ${destination.landmarkname2}`;
  document.querySelector(
    ".land2 h4"
  ).textContent = `${destination.attractiontype2} | ${destination.location2}`;
  document.querySelector(".land2 h3").textContent = destination.landmarkname2;
  document.querySelector(".land2 p").textContent =
    destination.landmdescription2;
  document.querySelector(
    ".land3 img"
  ).src = `https://kea21s-6eb0.restdb.io/media/${destination.imglandmark3}`;
  document.querySelector(
    ".land3 img"
  ).alt = `Picture of ${destination.landmarkname3}`;
  document.querySelector(
    ".land3 h4"
  ).textContent = `${destination.attractiontype3} | ${destination.location3}`;
  document.querySelector(".land3 h3").textContent = destination.landmarkname3;
  document.querySelector(".land3 p").textContent =
    destination.landmdescription3;
  document.querySelector(
    ".food1 img"
  ).src = `https://kea21s-6eb0.restdb.io/media/${destination.imgdish1}`;
  document.querySelector(
    ".food1 img"
  ).alt = `Picture of ${destination.dishname1}`;
  if (destination.dish1attribution) {
    document.querySelector(".food1 figcaption").textContent =
      destination.dish1imgattribution;
  } else {
    document.querySelector(".food1 figcaption").textContent = "";
    document.querySelector(".food1 h3").classList.add("space");
  }
  document.querySelector(".food1 h3").textContent = destination.dishname1;
  document.querySelector(".food1 p").textContent = destination.dishdescription1;
  document.querySelector(".food1 a").href = destination.recipe1;
  document.querySelector(
    ".food2 img"
  ).src = `https://kea21s-6eb0.restdb.io/media/${destination.imgdish2}`;
  document.querySelector(
    ".food2 img"
  ).alt = `Picture of ${destination.dishname2}`;
  if (destination.dish2attribution) {
    document.querySelector(".food2 figcaption").textContent =
      destination.dish2imgattribution;
  } else {
    document.querySelector(".food2 figcaption").textContent = "";
    document.querySelector(".food2 h3").classList.add("space");
  }
  document.querySelector(".food2 h3").textContent = destination.dishname2;
  document.querySelector(".food2 p").textContent = destination.dishdescription2;
  document.querySelector(".food2 a").href = destination.recipe2;
  if (destination.dish3exist) {
    document.querySelector(
      ".food3 img"
    ).src = `https://kea21s-6eb0.restdb.io/media/${destination.imgdish3}`;
    document.querySelector(
      ".food3 img"
    ).alt = `Picture of ${destination.dishname3}`;
    if (destination.dish3attribution) {
      document.querySelector(".food3 figcaption").textContent =
        destination.dish3imgattribution;
    } else {
      document.querySelector(".food3 figcaption").textContent = "";
      document.querySelector(".food3 h3").classList.add("space");
    }
    document.querySelector(".food3 h3").textContent = destination.dishname3;
    document.querySelector(".food3 p").textContent =
      destination.dishdescription3;
    document.querySelector(".food3 a").href = destination.recipe3;
  } else {
    document.querySelector(".food3").classList.add("disappear");
    document.querySelector(".dishes").classList.add("gap_space");
  }
}
