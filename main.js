const elRedBtn = document.querySelector("#red-btn");
const elRedLight = document.getElementsByTagName("span")[0];
const elYellowBtn = document.querySelector("#yellow-btn");
const elYellowLight = document.getElementsByTagName("span")[1];
const elGreenBtn = document.querySelector("#green-btn");
const elGreenLight = document.getElementsByTagName("span")[2];

elRedBtn.addEventListener("click", () => {
  elRedLight.classList.toggle("red");
  elYellowLight.classList.remove("yellow");
  elGreenLight.classList.remove("green");
});

elYellowBtn.addEventListener("click", () => {
  elYellowLight.classList.toggle("yellow");
  elRedLight.classList.remove("red");
  elGreenLight.classList.remove("green");
});

elGreenBtn.addEventListener("click", () => {
  elGreenLight.classList.toggle("green");
  elYellowLight.classList.remove("yellow");
  elRedLight.classList.remove("red");
});

const el = document.querySelectorAll(".colors");

let count = 0;

setInterval(() => {
  if (count <= 5) {
    el[2].style.backgroundColor = "";
    el[0].style.backgroundColor = "red";
  } else if (count > 5 && count <= 8) {
    el[0].style.backgroundColor = "";
    el[1].style.backgroundColor = "yellow";
  } else if (count > 8 && count <= 13) {
    el[1].style.backgroundColor = "";
    el[2].style.backgroundColor = "green";
    if (count == 13) {
      count = 0;
    }
  }
  count += 1;
}, 1000);
