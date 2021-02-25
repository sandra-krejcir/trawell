// const urlParams = new URLSearchParams(window.location.search);

//fetch data
// fetch("https://kea21s-6eb0.restdb.io/rest/trawell").then((res) =>
//     res.json().then(gotData)
// );

fetch("https://kea21s-6eb0.restdb.io/rest/trawell").then((res) =>
    res.json().then(gotData)
);

//loop through
function gotData(data) {
    data.forEach(showItem);
}
function showItem(item) {
    console.log(item);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(
        "img"
    ).href = `https://kea21s-6eb0.restdb.io/rest/trawell=${item.brandname}`;

    console.log(continent);
    document.querySelector("main>h4>span.category").textContent = category;
    const url = "https://kea21s-6eb0.restdb.io/rest/trawell=" + category;

    const subcategory = urlParams.get("country");
    console.log(country);
    document.querySelector("main>h4>span.category").textContent = subcategory;
    const url = "https://kea21s-6eb0.restdb.io/rest/trawell=" + subcategory;
    Parent = document.querySelector("div.flex-boxes");
    Parent.appendChild(copy);
}

function handleItemsList(data) {
    console.log(data);
    data.forEach(showProduct);
}

// handleItemsList();
