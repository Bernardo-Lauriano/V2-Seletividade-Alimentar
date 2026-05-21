const foods = [
  {
    name: 'Banana',
    category: 'fruta',
    image: 'https://images.pexels.com/photos/7472115/pexels-photo-7472115.jpeg',
  },
  {
    name: 'Maçã',
    category: 'fruta',
    image: 'https://images.pexels.com/photos/7333124/pexels-photo-7333124.jpeg',
  },
  {
    name: 'Uvas',
    category: 'fruta',
    image: 'https://images.pexels.com/photos/3987386/pexels-photo-3987386.jpeg',
  },
  {
    name: 'Pera',
    category: 'fruta',
    image: 'https://img.magnific.com/fotos-premium/somposition-de-peras-verdes-peras-isoladas-em-fundo-branco-fotografia-macro-de-estudio-profissional_299651-2607.jpg',
  },
  {
    name: 'Laranja',
    category: 'fruta',
    image: 'https://images.pexels.com/photos/32853430/pexels-photo-32853430.jpeg',
  },
  {
    name: 'Espinafre',
    category: 'vegetal',
    image: 'https://hortifrutibr.vtexassets.com/arquivos/ids/173610/Espinafre.jpg.jpg?v=638888917235370000',
  },
  {
    name: 'Brócolis',
    category: 'vegetal',
    image: 'https://media.istockphoto.com/id/1364035705/pt/foto/fresh-broccoli-on-white-background.jpg?s=612x612&w=0&k=20&c=kqSTjy1jtbbIpUsXbpSP70P3iweeXvjhzSAcU6g-8QU=',
  },
  {
    name: 'Pepino',
    category: 'vegetal',
    image: 'https://media.istockphoto.com/id/495383737/pt/foto/pepino.jpg?s=612x612&w=0&k=20&c=tPrOaxZ24e-eoEn7wL-eya78GfvbSdnMHvfGEkQPH8k=',
  },
  {
    name: 'Abobrinha',
    category: 'vegetal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlz-P2QLrVCvy_wuAj7qNz2K0wLYcR-b-oBw&s',
  },
  {
    name: 'Alface',
    category: 'vegetal',
    image: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Batata-doce',
    category: 'legume',
    image: 'https://thumbs.dreamstime.com/b/batata-doce-19526386.jpg?w=768',
  },
  {
    name: 'Abóbora',
    category: 'legume',
    image: 'https://thumbs.dreamstime.com/b/ab%C3%B3bora-37661680.jpg?w=768',
  },
  {
    name: 'Cenoura',
    category: 'legume',
    image: 'https://thumbs.dreamstime.com/b/cenoura-fresca-41176240.jpg?w=768',
  },
  {
    name: 'Feijão',
    category: 'legume',
    image: 'data:image/jpeg;base64,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',
  },
  {
    name: 'Ervilha',
    category: 'legume',
    image: 'https://thumbs.dreamstime.com/b/ervilha-verde-25003673.jpg?w=768',
  },
  {
    name: 'Ovo',
    category: 'proteina',
    image: 'https://thumbs.dreamstime.com/b/ovo-fritado-11064417.jpg?w=768',
  },
  {
    name: 'Frango',
    category: 'proteina',
    image: 'https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2024-f7ebe080858deadf7f539291e4715f1b.jpeg',
  },
  {
    name: 'Peixe',
    category: 'proteina',
    image: 'https://static.itdg.com.br/images/640-400/73e6dec9467a2a9c06d6226f807c41cb/file-de-peixe-assado-1-.jpg',
  },
  {
    name: 'Iogurte Natural',
    category: 'proteina',
    image: 'https://midias.correio24horas.com.br/2025/07/21/edicaseo-iogurte-e-rico-em-nutrientes-que-trazem-diversos-beneficios-para-o-bom-funcionamento-do-organismo-imagem-new-africa--shutterstock-4z6lmncktie.jpg',
  },
  {
    name: 'Tofu',
    category: 'proteina',
    image: 'https://media.istockphoto.com/id/523444303/pt/foto/org%C3%A2nico-cru-tofu-de-soja.jpg?s=612x612&w=0&k=20&c=wTrBD264IXkojpcUax4Hdeg0g1I_qu0pQ8XJ8n-x6bc=',
  },
  {
    name: 'Arroz Integral',
    category: 'carboidrato',
    image: 'https://media.istockphoto.com/id/695137334/pt/foto/brown-rice-in-bowl.jpg?s=612x612&w=0&k=20&c=HubeAmsRiqPk9TULraWj8yCpBD4H2We9VW-Xls0lXUA=',
  },
  {
    name: 'Pão Integral',
    category: 'carboidrato',
    image: 'https://media.istockphoto.com/id/474679296/pt/foto/caseiras-org%C3%A2nico-de-p%C3%A3o-de-trigo-integral.jpg?s=612x612&w=0&k=20&c=3vwTfnj2GPZ0JSDAF5m4g4ry-7FAaeOpqffpB_FdNmA=',
  },
  {
    name: 'Aveia',
    category: 'carboidrato',
    image: 'https://media.istockphoto.com/id/899796524/pt/foto/oat-flakes-in-a-glass-bowl.jpg?s=612x612&w=0&k=20&c=OvbyuTWfr9hwFBtYuJC9JtzbhTJ15Sl4tNJv3Q4Ak9Q=',
  },
  {
    name: 'Quinoa',
    category: 'carboidrato',
    image: 'https://media.istockphoto.com/id/478249440/pt/foto/tabbouleh-salada-com-quinoa-salsa-e-produtos-hort%C3%ADcolas.jpg?s=612x612&w=0&k=20&c=NUlZNz5Oo27psEplY1bF_AyzkvBUzViKGUt8PxLYUaU=',
  },
  {
    name: 'Batata Assada',
    category: 'carboidrato',
    image: 'https://media.istockphoto.com/id/1785448735/pt/foto/thanksgiving-roasted-potatoes.jpg?s=612x612&w=0&k=20&c=k8RbRf6wDmK7blkvl8Rrhni6Rd_KsP51oXc0INWZr9Q=',
  },
];

const foodGrid = document.getElementById('foodGrid');
const categoryButtons = document.querySelectorAll('.category-button');
const plateArea = document.getElementById('plateArea');
const plateMessage = document.getElementById('plateMessage');
const clearPlateBtn = document.getElementById('clearPlateBtn');
const welcomeScreen = document.getElementById('welcomeScreen');
const startButton = document.getElementById('startButton');
const gameCard = document.getElementById('gameCard');
const backButton = document.querySelector('.back-button');

let selectedFoods = [];

function speakFood(name) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(name);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.95;
  utterance.pitch = 1.1;
  speechSynthesis.speak(utterance);
}

function updatePlate() {
  if (selectedFoods.length === 0) {
    plateArea.innerHTML = '<div class="plate-empty">Escolha um alimento e ele aparecerá aqui.</div>';
  } else {
    plateArea.innerHTML = selectedFoods
      .map(
        (food) =>
          `<div class="plate-item"><img src="${food.image}" alt="${food.name}" title="${food.name}" /><span>${food.name}</span></div>`
      )
      .join('');
  }

  if (selectedFoods.length === 0) {
    plateMessage.textContent = 'Escolha um alimento!';
  } else {
    plateMessage.textContent = `Você escolheu ${selectedFoods.length} alimentos no prato.`;
  }
}

function renderFoods(category = 'all') {
  foodGrid.innerHTML = '';
  const filtered = category === 'all' ? foods : foods.filter((food) => food.category === category);

  filtered.forEach((food) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'food-card';
    card.innerHTML = `
      <img src="${food.image}" alt="${food.name}" />
      <div class="food-card-body">
        <p class="food-name">${food.name}</p>
        <p class="food-category">${categoryLabel(food.category)}</p>
      </div>
    `;

    if (selectedFoods.some((item) => item.name === food.name)) {
      card.classList.add('selected');
    }

    card.addEventListener('click', () => {
      speakFood(food.name);
      togglePlateFood(food);
      renderFoods(category);
    });

    foodGrid.appendChild(card);
  });
}

function categoryLabel(category) {
  switch (category) {
    case 'fruta':
      return 'Fruta';
    case 'vegetal':
      return 'Verdura';
    case 'legume':
      return 'Legume';
    case 'proteina':
      return 'Proteína';
    case 'carboidrato':
      return 'Carboidrato';
    default:
      return 'Alimento';
  }
}

function togglePlateFood(food) {
  const index = selectedFoods.findIndex((item) => item.name === food.name);
  if (index !== -1) {
    selectedFoods.splice(index, 1);
  } else {
    selectedFoods.push(food);
  }
  updatePlate();
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    categoryButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderFoods(button.dataset.category);
  });
});

function showWelcome() {
  welcomeScreen.classList.remove('hidden');
  gameCard.classList.add('hidden');
  backButton.classList.add('hidden');
}

function showGame() {
  welcomeScreen.classList.add('hidden');
  gameCard.classList.remove('hidden');
  backButton.classList.remove('hidden');
}

startButton.addEventListener('click', () => {
  showGame();
});

backButton.addEventListener('click', () => {
  selectedFoods = [];
  updatePlate();
  const active = document.querySelector('.category-button.active');
  renderFoods(active ? active.dataset.category : 'all');
  showWelcome();
});

renderFoods();
updatePlate();
showWelcome();
showWelcome();
