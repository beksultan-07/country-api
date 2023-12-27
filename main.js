const list = document.querySelector(".list");

function createItem(country, capital, cur, region, coat, flag) {
    const li = document.createElement("li");
    li.classList.add("row");

    const span1 = document.createElement("span");
    span1.classList.add("col");
    span1.innerText = country;

    const span2 = document.createElement("span");
    span2.classList.add("col");
    span2.innerText = capital;

    const span3 = document.createElement("span");
    span3.classList.add("col");
    span3.innerText = cur;

    const span4 = document.createElement("span");
    span4.classList.add("col");
    span4.innerText = region;

    const imgWrap1 = document.createElement("span");
    imgWrap1.classList.add("col");

    const img1 = document.createElement("img");
    img1.classList.add("col-img");
    img1.src = coat;

    imgWrap1.append(img1);

    const imgWrap2 = document.createElement("span");
    imgWrap2.classList.add("col");

    const img2 = document.createElement("img");
    img2.classList.add("col-img");
    img2.src = flag;

    imgWrap2.append(img2);

    li.append(span1, span2, span3, span4, imgWrap1, imgWrap2);

    list.append(li);
}

fetch("https://restcountries.com/v3.1/all")
    .then((r) => {
        return r.json();
    })
    .then((res) => {
        res.forEach((country) => {
            const currancy = country.currencies;
            const key = Object.keys(currancy || {})[0];
            const cur = currancy[key].name;

            createItem(
                country.name.common,
                country.capital,
                cur,
                country.region,
                country.coatOfArms.png,
                country.flags.png
            );
        });
    })
    .catch((er) => {
        console.log(er);
    });
