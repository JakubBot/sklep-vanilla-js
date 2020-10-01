"use strict";
//Swiper
let swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Back to photo
const backButton = document.querySelectorAll(".box > h4");
const swiperSlide = document.querySelectorAll(".swiper-slide");

backButton.forEach((value, index) => {
  value.addEventListener("click", () => {
    swiperSlide[index].classList.add("showphoto");
  });
}, false);

swiperSlide.forEach((value, index) => {
  value.addEventListener("mousemove", () => {
    if (swiperSlide[index].classList.contains("showphoto")) {
      swiperSlide[index].classList.remove("showphoto");
    }
    swiperSlide[index].classList.add("hidephoto");
  });
}, false);

const readMore = document.querySelector(".information__button");
const text = document.querySelector(".information__card p");
readMore.addEventListener(
  "click",
  () => {
    if (readMore.innerHTML === "Read More") {
      readMore.innerHTML = "Hide";
      text.insertAdjacentHTML(
        "beforeend",
        "Sed dictum nunc lobortis, finibus purus nec, lacinia magna. Morbi eleifend tempus est non convallis. Morbi accumsan tempor urna. Quisque id hendrerit nulla. Vestibulum nibh lorem.Quisque facilisis at ipsum at luctus. Etiam eget tellus ut quam aliquam condimentum vitae quis est."
      );
    } else {
      readMore.innerHTML = "Read More";
      text.innerHTML =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tinciduntblandit auctor. Donec at nunc sed quam efficitur fermentum vel et felis. Sed vitae dictum magna. Nunc enim mi, mollis nec efficitur non, viverranon dolor. Pellentesque ut elit nisi. Nullam ut felis blandit, consectetur nisi sit amet,sagittis ex.";
    }
  },
  false
);

//square cursor
const body = document.querySelector("body");
const cursor = document.querySelector("#cursor");
const checkbox = document.querySelector('input[type="checkbox"]');
const interactiveElements = document.querySelectorAll(
  "button,h5,#data,.swiper-button-prev,.swiper-button-next,a,h4,input,span"
);
interactiveElements.forEach((value) => {
  value.setAttribute("style", "cursor: none;");
}, false);

checkbox.addEventListener(
  "click",
  () => {
    if (cursor.style.display === "none") {
      cursor.style.display = "initial";
      interactiveElements.forEach((value) => {
        value.setAttribute("style", "cursor: none;");
      }, false);
    } else {
      cursor.style.display = "none";
      interactiveElements.forEach((value) => {
        value.setAttribute("style", "cursor: pointer;");
      }, false);
    }
    !body.hasAttribute("style")
      ? body.setAttribute("style", "cursor: initial;")
      : body.removeAttribute("style");
  },
  false
);

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.position = "fixed";
});

interactiveElements.forEach((value) => {
  value.addEventListener("mouseover", () => {
    cursor.style.width = "25px";
    cursor.style.height = "25px";
  });
});
interactiveElements.forEach((value) => {
  value.addEventListener("mouseleave", () => {
    cursor.style.width = "40px";
    cursor.style.height = "40px";
  });
});

//mediaButton
const mediaButton = document.querySelector("#media-button");

mediaButton.addEventListener(
  "click",
  () => {
    mediaButton.classList.toggle("activeF");
  },
  false
);

const container = document.querySelector(".container");
container.addEventListener(
  "click",
  () => {
    if (mediaButton.classList.contains("activeF")) {
      mediaButton.classList.remove("activeF");
    } else if (basket.classList.contains("activeB")) {
      basket.classList.remove("activeB");
    }
  },
  false
);

//basket
const basket = document.querySelector("#basket");
const basketIcon = document.querySelector("#basket span");
let wholePrice = 0;
let extraPrice = 0;
basketIcon.addEventListener(
  "click",
  () => {
    basket.classList.toggle("activeB");
    //add multipy foods
    const amount = document.querySelectorAll("#amount");
    const minus = document.querySelectorAll("#minus");
    const plus = document.querySelectorAll("#plus");
    const cenauslugi = document.querySelectorAll("#cenauslugi");

    minus.forEach((value, index) => {
      if (value.getAttribute("listener") === null) {
        value.addEventListener(
          "click",
          () => {
            if (amount[index].innerHTML > 1) {
              let basicPrice = parseFloat(total.innerHTML, 10);
              amount[index].innerHTML--;
              extraPrice = extraPrice - cenauslugi[index].innerHTML * 1;
              total.innerHTML = (basicPrice + extraPrice).toFixed(2) + " zł";
              extraPrice = 0;
            }
          },
          false
        );
        value.setAttribute("listener", "true");
      }
    });

    plus.forEach((value, index) => {
      if (value.getAttribute("listener") === null) {
        value.addEventListener(
          "click",
          () => {
            let basicPrice = parseFloat(total.innerHTML, 10);
            amount[index].innerHTML++;
            extraPrice += cenauslugi[index].innerHTML * 1;
            total.innerHTML = (basicPrice + extraPrice).toFixed(2) + " zł";
            extraPrice = 0;
          },
          false
        );
        value.setAttribute("listener", "true");
      }
    });

    if (basket.classList.contains("activeB")) {
      for (let i = 0; i < data.childElementCount; ++i) {
        wholePrice += amount[i].innerHTML * cenauslugi[i].innerHTML;
      }
      total.innerHTML = wholePrice.toFixed(2) + " zł";
    } else {
      wholePrice = 0;
    }
  },
  false
);

const informations = [
  {
    price: 10.99,
    name: "Jajko na toscie",
  },
  {
    price: 8.99,
    name: "Salatka z  bekonem",
  },
  {
    price: 6.99,
    name: "Fit sałatka",
  },
  {
    price: 5.99,
    name: "Tost avokado",
  },
  {
    price: 6.99,
    name: "Sałatka z bekonem",
  },
  {
    price: 9.99,
    name: "Kanapka z jajkiem i avokado",
  },
  {
    price: 7.99,
    name: "Kanapka z awokado i liśćmi bazylii",
  },
  {
    price: 11.99,
    name: "Makaron w mięsem",
  },
  {
    price: 10.99,
    name: "Nuggetsy z sałatką",
  },
  {
    price: 9.99,
    name: "Naleśnik z niespodzianką",
  },
];

const buttons = document.querySelectorAll("button.basket");
const innerButtons = document.querySelectorAll("button.basket p");
const innerbasketIcons = document.querySelectorAll(
  "button[class*=details-basket] i"
);
const dots = document.querySelector("#basket ul > p");
const data = document.querySelector("#data");
const total = document.querySelector(".total p");

let cost = 0;
let count = 0;
buttons.forEach((value, index) => {
  value.addEventListener(
    "click",
    () => {
      if (innerButtons[index].innerHTML === "Dodaj do koszyka") {
        addtoBasket(index);
      }
    },
    false
  );
});

let basketitemsDisplay = "";
function addtoBasket(index) {
  if (count >= 3) {
    dots.innerHTML = "...";
    basketitemsDisplay = "display:none;";
  }
  innerButtons[index].innerHTML = "Przejdź do koszyka";
  let itemName = shortForm(informations[index].name);
  data.insertAdjacentHTML(
    "beforeend",
    `<li style=${basketitemsDisplay}><h4>${itemName}</h4><p><span id="minus" class='mark'>-</span><span id="amount">1</span><span id="plus" class='mark'>+</span></p><p id="cenauslugi">${informations[index].price}</p></li>`
  );

  //all icons but not this in swiper
  if (index > 3) {
    innerbasketIcons[index - 4].style.display = "none";
  }

  cost += informations[index].price;
  total.innerHTML = cost + " zł";
  count++;
}

document.querySelector("#basket ul h5").addEventListener("click", deletefromBasket, false);

function shortForm(name) {
  if (name.length < 14) return name;
  else return name.substring(0, 14) + "...";
}

function deletefromBasket() {
  innerButtons.forEach((value) => {
    value.innerHTML = "Dodaj do koszyka";
  });
  cost = 0;
  count = 0;
  data.innerHTML = "";
  dots.innerHTML = "";
  total.innerHTML = "0.00 zł";
  extraPrice = 0;
  wholePrice = 0;
  innerbasketIcons.forEach((value) => {
    value.style.display = "initial";
  });
  basketitemsDisplay = "display: grid";
}

window.onscroll = function() {
  const footer = document.querySelector('.footer');
  let hideFloatedButtons = body.offsetHeight - window.scrollY - window.innerHeight - footer.offsetHeight
  if (hideFloatedButtons <= 0) {
    basket.style.opacity = "0"
    mediaButton.style.opacity = "0"
  }
  else {
    basket.style.opacity = "1"
    mediaButton.style.opacity = "1"
  }
}