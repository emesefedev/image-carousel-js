import "./style.css";
import chameleon1 from "./chameleon1.jpg";
import chameleon2 from "./chameleon2.jpg";
import chameleon3 from "./chameleon3.jpg";
import chameleon4 from "./chameleon4.jpg";
import chameleon5 from "./chameleon5.jpg";
import chameleon6 from "./chameleon6.jpg";

const imagesInfo = [
  {
    src: chameleon1,
    url: "https://www.freepik.es/imagen-ia-gratis/vista-camaleon-brillantes-colores-neon_266515770.htm#fromView=search&page=1&position=29&uuid=e384aa8f-d66e-4079-b3c4-5bf4224f2d0b",
  },
  {
    src: chameleon2,
    url: "https://www.freepik.es/imagen-ia-gratis/vista-camaleon-brillantes-colores-neon_266515883.htm#fromView=search&page=1&position=37&uuid=093f6376-21ac-4f9c-ac94-f41b6b9e95b8",
  },
  {
    src: chameleon3,
    url: "https://www.freepik.es/imagen-ia-gratis/vista-camaleon-brillantes-colores-neon_266515738.htm#fromView=search&page=4&position=38&uuid=093f6376-21ac-4f9c-ac94-f41b6b9e95b8",
  },
  {
    src: chameleon4,
    url: "https://www.freepik.es/imagen-ia-gratis/colores-brillantes-neon-brillan-camaleon-salvaje_266517451.htm#fromView=search&page=1&position=2&uuid=98289ad6-54cc-4ba1-9787-e478a1633655",
  },
  {
    src: chameleon5,
    url: "https://www.freepik.es/imagen-ia-gratis/vista-camaleon-brillantes-colores-neon_266515623.htm#fromView=search&page=1&position=39&uuid=46e1cd6e-b8f4-4ef3-964d-1ddd2463d3af",
  },
  {
    src: chameleon6,
    url: "https://www.freepik.es/imagen-ia-gratis/hermoso-camaleon-naturaleza_269137670.htm#fromView=search&page=1&position=44&uuid=46e1cd6e-b8f4-4ef3-964d-1ddd2463d3af",
  },
];

const carousel = () => document.getElementById("carousel");
let carouselVisibleWidth = 0;
let carouselTotalWidth = 0;
let isTranslationDirectionRight = true;
let intervalId = null;

window.addEventListener("load", () => {
  for (let i = 0; i < imagesInfo.length; i++) {
    addImage(i);
  }
  getCarouselWidths();

  intervalId = setInterval(autoTranslate, 5000);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    translateCarouselToRight();
    clearInterval(intervalId);
    intervalId = setInterval(autoTranslate, 5000);
  } else if (e.key === "ArrowLeft") {
    translateCarouselToLeft();
    clearInterval(intervalId);
    intervalId = setInterval(autoTranslate, 5000);
  }
});

function addImage(idx) {
  const img = document.createElement("img");
  img.src = imagesInfo[idx].src;
  carousel().appendChild(img);
}

function getCarouselWidths() {
  carouselVisibleWidth = (carousel().scrollHeight * 16) / 9;
  carouselTotalWidth = carouselVisibleWidth * imagesInfo.length;
}

function translateCarouselToRight() {
  const left = carousel().style.left ? parseFloat(carousel().style.left) : 0; // left value
  const newLeft = left - carouselVisibleWidth;

  if (newLeft > -carouselTotalWidth) {
    carousel().style.left = `${newLeft}px`;
  } else {
    isTranslationDirectionRight = false;
  }
}

function translateCarouselToLeft() {
  const left = carousel().style.left ? parseFloat(carousel().style.left) : 0; // left value
  const newLeft = left + carouselVisibleWidth;

  if (newLeft < 0.1) {
    // can't be 0 because lack of precision
    carousel().style.left = `${newLeft}px`;
  } else {
    isTranslationDirectionRight = true;
  }
}

function autoTranslate() {
  if (isTranslationDirectionRight) {
    translateCarouselToRight();
  } else {
    translateCarouselToLeft();
  }
}
