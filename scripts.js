const characterCardTemplate = document.querySelector('.col.mb-5');

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;

    characters.forEach(character => {
      const newCard = characterCardTemplate.cloneNode(true);
      const cardImage = newCard.querySelector('.card-img-top');
      const cardBody = newCard.querySelector('.card-body h5');
      const cardFooter = newCard.querySelector('.card-footer a');

      cardImage.src = character.image;
      cardBody.textContent = character.name;
      cardFooter.textContent = `View details`;

      document.querySelector('.row-cols-xl-4').appendChild(newCard);
    });
  });
