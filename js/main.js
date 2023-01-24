$(function () {
  $(".sidebar-link").click(function () {
    $(".sidebar-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});


const allVideos = document.querySelectorAll(".video");

allVideos.forEach((v) => {
  v.addEventListener("mouseover", () => {
    const video = v.querySelector("video");
    video.play();
  });
  v.addEventListener("mouseleave", () => {
    const video = v.querySelector("video");
    video.pause();
  });
});


const allCards = document.querySelectorAll(".small-header");

allCards.forEach((element) => {
  let urlLink = window.getComputedStyle(element, ":after").backgroundImage;
  element.addEventListener("click", (e) => {
    window.location.replace("allDocs.html");
  });
});

let lupa = document.querySelector(".lupa");
let lupa2 = document.querySelector(".lupa-2");
const Search = document.querySelector(".search");

lupa.addEventListener("click", () => {
  Search.classList.add("open-search")
  lupa2.classList.add("open-search")
  lupa.classList.add("open-searchs")
});
lupa2.addEventListener("click", () => {
  Search.classList.remove("open-search")
  lupa2.classList.remove("open-search")
  lupa.classList.remove("open-searchs")
});
