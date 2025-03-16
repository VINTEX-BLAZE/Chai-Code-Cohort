/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

// Targeted the next and previous btns
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");
let SlideshowBtn = document.getElementById("autoPlayButton");
let TimerDisplay = document.getElementById("timerDisplay");
let caption = document.getElementById("caption");
let panel = document.getElementById("carouselTrack");
window.addEventListener("load", () => {
  images.forEach((imgObj, index) => {
    // img tag create kia
    let img = document.createElement("img");
    // src dia
    img.setAttribute("src", imgObj.url);
    // caption dia
    caption.textContent = imgObj.caption;

    img.setAttribute("id", index);
    panel.append(img);
  });
});

// created a NodeList of all the loaded images
let IMG_list = document.querySelectorAll("div img");

// Added EventListner to Next btn
nextButton.addEventListener("click", (evt) => {});

// added EventListner to Previous btn
prevButton.addEventListener("click", (evt) => {});

// added EventListner to SlideshowBtn btn
SlideshowBtn.addEventListener("click", (evt) => {});

function nexPic(images) {}
