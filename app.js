const form = document.querySelector("form");
const allMess = document.querySelector(".all-data");
const result = document.querySelector(".result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.querySelector(".date");
  selectedData(input);
});

// all data
async function allData() {
  const url = "https://657172c2d61ba6fcc012907a.mockapi.io/user";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    let id = document.createElement("p");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    id.innerHTML = `id : ${data[i].id}`;
    p1.innerHTML = `name : ${data[i].name}`;
    p2.innerHTML = `email : ${data[i].email}`;
    p3.innerHTML = `message : ${data[i].message}`;
    p4.innerHTML = `date : ${data[i].date}`;
    div.append(id, p1, p2, p4, p3);
    result.append(div);
  }
}

// get data according to date
async function selectedData(dater) {
  const url = "https://657172c2d61ba6fcc012907a.mockapi.io/user";
  const res = await fetch(url);
  const data = await res.json();
  const result = document.querySelector(".result");
  result.innerHTML = "";
  if (dater.value === "") {
    result.innerHTML = "date is empty 🥺🥺🥺";
  } else {
    let selected = data.filter((ele) => ele.date === dater.value);
    if (selected.length === 0) {
      result.innerHTML = `no data that match with ${dater.value}`;
    }
    for (let i = 0; i < selected.length; i++) {
      let div = document.createElement("div");
      let id = document.createElement("p");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      id.innerHTML = `id : ${selected[i].id}`;
      p1.innerHTML = `name : ${selected[i].name}`;
      p2.innerHTML = `email : ${selected[i].email}`;
      p3.innerHTML = `message : ${selected[i].message}`;
      p4.innerHTML = `date : ${selected[i].date}`;
      div.append(id, p1, p2, p4, p3);
      result.append(div);
    }
  }
}

allMess.addEventListener("click", function () {
  result.innerHTML = "";
  allData();
});
