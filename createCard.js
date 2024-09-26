function createCard(house) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");

  if (house.img) {
    cardImg.style.backgroundImage = `url(${house.img})`;
  } else {
    cardImg.style.backgroundColor = "grey";
  }

  cardHeader.appendChild(cardImg);
  card.appendChild(cardHeader);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = house.name;

  const cardDesc = document.createElement("p");
  cardDesc.classList.add("card-description");
  cardDesc.textContent = house.desc;

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.textContent = house.available ? "I want it" : "Unavailable";
  cardButton.disabled = !house.available;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDesc);
  cardBody.appendChild(cardButton);

  card.appendChild(cardBody);

  return card;
}

export default createCard;
