const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


function selectButton(button) {
    let buttons = document.querySelectorAll('.menu-button'); 
    for (let i = 0; i < buttons.length; i++) { 
        buttons[i].classList.remove('selected'); 
    }
    button.classList.add('selected'); 
}

const firstHalfSelect = document.getElementById('first-half');
const secondHalfSelect = document.getElementById('second-half');
const pizzaMoldImage = document.getElementById('pizza-mold-complete');
const pizzaImagesContainer = document.querySelector('.pizza-images');

function updatePizzaImages() {
  const firstHalfValue = firstHalfSelect.value;
  const secondHalfValue = secondHalfSelect.value;

  // Limpar imagens existentes
  pizzaImagesContainer.innerHTML = '';

  // Pizza Completa
  if (firstHalfValue === '' && secondHalfValue === '') {
    const completePizzaImage = document.createElement('img');
    completePizzaImage.src = `assets/midia/completa/molde.png`;
    completePizzaImage.alt = `Pizza Completa`;
    pizzaImagesContainer.appendChild(completePizzaImage);
  } else if (firstHalfValue === secondHalfValue) {
    const completePizzaImage = document.createElement('img');
    completePizzaImage.src = `assets/midia/completa/${firstHalfValue}.png`;
    completePizzaImage.alt = `${firstHalfValue} Pizza Completa`;
    pizzaImagesContainer.appendChild(completePizzaImage);
  } else {
    // Meias Pizzas
    if (firstHalfValue !== '') {
      const firstHalfImage = document.createElement('img');
      firstHalfImage.src = `assets/midia/esquerda/${firstHalfValue}.png`;
      firstHalfImage.alt = `${firstHalfValue} Esquerda`;
      pizzaImagesContainer.appendChild(firstHalfImage);
    } else {
      // Se a primeira metade estiver vazia, adicionar imagem de molde esquerdo
      const firstHalfMoldImage = document.createElement('img');
      firstHalfMoldImage.src = `assets/midia/esquerda/molde.png`;
      firstHalfMoldImage.alt = `Pizza Esquerda Molde`;
      pizzaImagesContainer.appendChild(firstHalfMoldImage);
    }

    if (secondHalfValue !== '') {
      const secondHalfImage = document.createElement('img');
      secondHalfImage.src = `assets/midia/direita/${secondHalfValue}.png`;
      secondHalfImage.alt = `${secondHalfValue} Direita`;
      pizzaImagesContainer.appendChild(secondHalfImage);
    } else {
      // Se a segunda metade estiver vazia, adicionar imagem de molde direito
      const secondHalfMoldImage = document.createElement('img');
      secondHalfMoldImage.src = `assets/midia/direita/molde.png`;
      secondHalfMoldImage.alt = `Pizza Direita Molde`;
      pizzaImagesContainer.appendChild(secondHalfMoldImage);
    }
  }
}

// Atualizar imagens na seleção inicial
updatePizzaImages();

// Atualizar imagens na mudança das seleções
firstHalfSelect.addEventListener('change', updatePizzaImages);
secondHalfSelect.addEventListener('change', updatePizzaImages);
