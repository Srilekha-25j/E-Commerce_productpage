const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Formals",
    price: 669,
    colors: [
      {
        code: "black",
        img: "img/formals.png",
      },
      {
        code: "brown",
        img: "img/formals2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Casuals",
    price: 799,
    colors: [
      {
        code: "lightgray",
        img: "img/casuals.png",
      },
      {
        code: "brown",
        img: "img/casuals2.png",
      },
    ],
  },
  {
    id: 3,
    title: "boots",
    price: 599,
    colors: [
      {
        code: "brown",
        img: "img/boots.png",
      },
      {
        code: " #00008B",
        img: "img/boots2.png",
      },
    ],
  },
  {
    id: 4,
    title: "flipflops",
    price: 399,
    colors: [
      {
        code: "black",
        img: "img/flipflops.png",
      },
      {
        code: "red",
        img: "img/flipflops2.png",
      },
    ],
  },
  {
    id: 5,
    title: "floaters",
    price:300,
    colors: [
      {
        code: "brown",
        img: "img/floaters.png",
      },
      {
        code: "black",
        img: "img/floaters2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});