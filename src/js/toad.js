import toadData from "../json/data.json" assert { type: "json" };

const newData = [toadData];
const w = window.innerWidth;

for (let i = 0; i < newData[0].sections.length; i++) {
  const element = document.createElement("button");
  const element2 = document.createElement("div");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const icon = document.createElement("img");
  element.innerHTML = newData[0].sections[i].title.value;
  p.innerHTML = newData[0].sections[i].panel.value;
  img.src = newData[0].sections[i].panel.image.src;
  icon.src = i === 0 ? "src/svg/down-arrow.svg" : "src/svg/padlock.svg";
  element2.style.display = "none";
  img.style.height = w < 820 ? "100px" : "200px";
  img.style.width = w < 820 ? (w < 400 ? "250px" : "320px") : "550px";
  element.className = "container";
  element2.className = "step";
  p.className = "text";
  element.id = "button" + i;
  element2.id = "div" + i;
  icon.id = "icon" + i;
  document.querySelector("#main").appendChild(element);
  document.querySelector("#main").appendChild(element2);
  element.appendChild(icon);
  element2.appendChild(p);
  element2.appendChild(img);

   if (i === 0) {
    element.onclick = function () {
      if (element2.style.display !== "none") {
        element2.style.display = "none";
        icon.src = "src/svg/down-arrow.svg";
      } else {
        const showBtn2 = document.querySelector(`#button${1}`);
        element2.style.display = "flex";
        element2.style.flexDirection =  w < 820 ? "column" : "row";
        element.style.border = "none";
        showBtn2.style.borderTop = "2px solid #d5dbdb";
        icon.src = "src/svg/up-arrow.svg";
      }
    }
  }
    else{
   element.onclick = function () {
      if (element2.style.display !== "none") {
        element2.style.display = "none";
        icon.src = "src/svg/down-arrow.svg";
      } else {
        const showBtn2 = document.querySelector(`#button${i}`);
        element2.style.display = "flex";
        element2.style.flexDirection =  w < 820 ? "column" : "row";
        element.style.border = "none";
        showBtn2.style.borderTop = "2px solid #d5dbdb";
        icon.src = "src/svg/up-arrow.svg";
      }
    }
  }
}
