const home = document.querySelector(".button-54");
home.addEventListener("click", function () {
  window.location.href = "./index.html";
});

(function () {
  const url = "https://6526591e917d673fd76c101e.mockapi.io/blame";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const ipResult = document.querySelector(".ip-result");
      for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        let id = document.createElement("p");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        id.innerHTML = `id : ${data[i].id}`;
        p1.innerHTML = `visited date : ${data[i].createdAt}`;
        p2.innerHTML = `city : ${data[i].city}`;
        p3.innerHTML = `region : ${data[i].region}`;
        p4.innerHTML = `county : ${data[i].country}`;
        p5.innerHTML = `ip : ${data[i].ip}`;
        div.append(id, p5, p1, p2, p3, p4);
        ipResult.append(div);
      }
    });
})();
