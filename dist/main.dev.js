"use strict";

var picArray = document.querySelectorAll(".card-div");
var picNum = picArray.length;
var open = new Array(picNum);

for (var i = 0; i < picNum; ++i) {
  open[i] = false;
}

var statusCard = function statusCard(id) {
  var pic = picArray[id].firstElementChild;
  var text_box = pic.nextElementSibling;
  var text = text_box.firstElementChild;

  if (open[id] == false) {
    pic.style.transitionDelay = "0s";
    pic.style.borderBottomLeftRadius = "0";
    pic.style.borderBottomRightRadius = "0";
    text_box.style.height = "350px";
    text.style.opacity = "1";
    open[id] = true;
  } else {
    pic.style.transitionDelay = "0.8s";
    pic.style.borderBottomLeftRadius = "10px";
    pic.style.borderBottomRightRadius = "10px";
    text_box.style.height = "0";
    text.style.opacity = "0";
    open[id] = false;
  }

  setTimeout(function () {
    pic.style.transitionDelay = "0s";
  }, 800);
};

var header = document.querySelector(".header");
var imgPos = document.querySelector(".banner-bottom").offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > imgPos) {
    header.style.backgroundColor = "#222";
  } else {
    header.style.backgroundColor = "transparent";
  }
};