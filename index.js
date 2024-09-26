import houseToRent from "./houseToRent.js";
import createCard from "./createCard.js";

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards");

  houseToRent.forEach((house) => {
    const card = createCard(house);
    cardsContainer.appendChild(card);
  });
});
