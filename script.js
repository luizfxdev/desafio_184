// Elementos do DOM
const matrixInput = document.getElementById('matrixInput');
const invertBtn = document.getElementById('invertBtn');
const returnBtn = document.getElementById('returnBtn');
const originalOutput = document.getElementById('originalOutput');
const resultOutput = document.getElementById('resultOutput');
const animationContainer = document.getElementById('animationContainer');

// Função para inverter a matriz verticalmente
function verticalDance(sprite) {
  if (!Array.isArray(sprite)) {
    throw new Error('Input must be a 2D array');
  }
  return JSON.parse(JSON.stringify(sprite)).reverse();
}

// Função para processar a entrada
function processInput() {
  try {
    // Limpa a animação anterior
    animationContainer.style.display = 'none';

    // Obtém e valida a entrada
    const inputText = matrixInput.value.trim();
    if (!inputText) {
      alert('Por favor, insira uma matriz!');
      return;
    }

    const originalMatrix = JSON.parse(inputText);
    originalOutput.textContent = 'Original: ' + JSON.stringify(originalMatrix);

    if (!Array.isArray(originalMatrix) || !originalMatrix.every(Array.isArray)) {
      throw new Error('Input must be a 2D array');
    }

    const invertedMatrix = verticalDance(originalMatrix);
    resultOutput.textContent = 'Invertida: ' + JSON.stringify(invertedMatrix);

    // Mostra a animação GIF
    animationContainer.style.display = 'block';
  } catch (error) {
    resultOutput.textContent = 'Erro: ' + error.message;
    console.error(error);
  }
}

// Função para limpar os resultados
function clearResults() {
  originalOutput.textContent = '';
  resultOutput.textContent = '';
  matrixInput.value = '';
  animationContainer.style.display = 'none';
}

// Event Listeners
invertBtn.addEventListener('click', processInput);
returnBtn.addEventListener('click', clearResults);

// Exemplo inicial para demonstração
matrixInput.value = '[[1,2,3],[4,5,6],[7,8,9]]';
