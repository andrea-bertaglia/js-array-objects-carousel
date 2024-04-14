// test
console.log("Test OK");

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// catturo il container
const carouselContainer = document.querySelector(".my-carousel-images");

// genero gli elementi
images.forEach((curImage) => {
  carouselItem = `
      <div class="my-carousel-item" carousel-item="1">
        <img
          class="img-fluid"
          src="./${curImage.image}"
          alt="${curImage.title}"
        />
        <div class="item-description px-3">
          <h2>${curImage.title}</h2>
          <p>${curImage.text}</p>
        </div>
      </div>
  `;
  carouselContainer.innerHTML += carouselItem;
});

// imposto l'immagine di partenza
const slidesElem = document.querySelectorAll(".my-carousel-item");
let activeIndex = 0;
slidesElem[activeIndex].classList.add("active");

// gestisco i bottoni
document.querySelector(".my-next").addEventListener("click", goToNext);
document.querySelector(".my-previous").addEventListener("click", goToPrevious);

// pulsante avanti
function goToNext() {
  slidesElem[activeIndex].classList.remove("active");

  if (activeIndex < images.length - 1) {
    activeIndex++;
    console.log(activeIndex);
  } else {
    activeIndex = 0;
  }

  slidesElem[activeIndex].classList.add("active");
}

// pulsante indietro
function goToPrevious() {
  slidesElem[activeIndex].classList.remove("active");

  if (activeIndex !== 0) {
    activeIndex--;
    console.log(activeIndex);
  } else {
    activeIndex = images.length - 1;
  }

  slidesElem[activeIndex].classList.add("active");
}
