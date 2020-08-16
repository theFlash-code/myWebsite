let open = false;

let statusCard = function(){
    let pic = document.querySelector(".card-img");
    let text_box = document.querySelector(".card-text");
    let text = document.querySelector(".card-text p");

    if(!open){
        pic.style.transitionDelay = "0s";
        pic.style.borderBottomLeftRadius = "0";
        pic.style.borderBottomRightRadius = "0";
        text_box.style.height = "350px";
        text.style.opacity = "1";
        open = true;
    }else{
        pic.style.transitionDelay = "0.8s";
        pic.style.borderBottomLeftRadius = "10px";
        pic.style.borderBottomRightRadius = "10px";
        text_box.style.height = "0";
        text.style.opacity = "0";
        open = false;
    }
}