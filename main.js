const elRedBtn = document.querySelector("#red-btn");
const elRedLight = document.getElementsByTagName("span")[0];
const elYellowBtn = document.querySelector("#yellow-btn");
const elYellowLight = document.getElementsByTagName("span")[1];
const elGreenBtn = document.querySelector("#green-btn");
const elGreenLight = document.getElementsByTagName("span")[2];


    elRedBtn.addEventListener("click", () => {
        elRedLight.classList.toggle("red");
        elYellowLight.classList.remove("yellow");
        elGreenLight.classList.remove("green")
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