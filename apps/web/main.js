const container = document.getElementById("gridContainer");
const resetBtn = document.getElementById("resetBtn");
const gridSizeInput = document.getElementById("gridSize");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 640 / size;


  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.opacity = 0;

    square.addEventListener("mouseover", () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      let opacity = parseFloat(square.style.opacity);
      if (opacity < 1) {
        square.style.opacity = (opacity + 0.1).toFixed(1);
      }
    });

    container.appendChild(square);
  }
}

resetBtn.addEventListener("click", () => {
  const size = Number(gridSizeInput.value);

  if (size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(size);
});

// Initial grid
createGrid(16);
