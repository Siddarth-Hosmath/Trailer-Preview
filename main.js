const btnEle = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-icon");
const trailerContainerEle = document.querySelector(".trailer-container");
const videoELe = document.querySelector("video");

btnEle.addEventListener("click", ()=>{
    trailerContainerEle.classList.remove("active");
})

closeBtn.addEventListener("click" , ()=>{
    trailerContainerEle.classList.add("active");
    videoELe.pause();
    videoELe.currentTime = 0;
});