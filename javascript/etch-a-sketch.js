let grid;
slider = document.querySelector('.slider');
resetButton = document.querySelector('.reset-button');
randomButton = document.querySelector('.random-button');
eraserButton = document.querySelector('.eraser-button');

function createGrid(x, y) {
    container = document.querySelector('.content .container')
    containerWidth = container.offsetWidth / 16;
    containerHeight = container.offsetHeight / 16;

    if (container.hasChildNodes() == true) return 0;

    for (let i = 0; i < x * y; i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid');
        gridElement.style.width = `${containerWidth / x}rem`;
        gridElement.style.height = `${containerHeight / y}rem`;
        gridElement.setAttribute('draggable', false);
        container.appendChild(gridElement);
    }

    grid = document.querySelectorAll('.grid');
    
    addMouseCapture();
}

function removeGrid(x, y) {
    while (container.hasChildNodes() == true) {
        container.removeChild(container.lastElementChild);
    }
}

function paintOnHover(gridElement) {
    if (Array.from(randomButton.classList).includes('random-button.active')) {
        gridElement.style.backgroundColor = `#${randomColor()}`
    } else if (Array.from(eraserButton.classList).includes('eraser-button.active')) {
        gridElement.style.backgroundColor = '#FFF'
    } else {
        gridElement.style.backgroundColor = '#000'
    }
}

function resetGrid() {
    grid.forEach(gridElement => {
        gridElement.style.backgroundColor = '#FFF';
    })
}

function randomColor() {
    return randomColorCode = Math.floor(Math.random()*16777215).toString(16);
}

function toggleRandomButton() {
    if (Array.from(randomButton.classList).includes('random-button.active')) {
        randomButton.classList.remove('random-button.active');
        randomButton.style.backgroundColor = '#425A91'
        randomButton.style.margin = '0'
    } else {
        eraserButton.classList.remove('eraser-button.active');
        eraserButton.style.backgroundColor = '#425A91'
        eraserButton.style.margin = '0'
        randomButton.classList.add('random-button.active');
        randomButton.style.backgroundColor = '#212D49'
        randomButton.style.margin = '0.1rem 0 0 0.1rem'
    }
}

function toggleEraserButton() {
    if (Array.from(eraserButton.classList).includes('eraser-button.active')) {
        eraserButton.classList.remove('eraser-button.active');
        eraserButton.style.backgroundColor = '#425A91'
        eraserButton.style.margin = '0'
    } else {
        randomButton.classList.remove('random-button.active');
        randomButton.style.backgroundColor = '#425A91'
        randomButton.style.margin = '0'
        eraserButton.classList.add('eraser-button.active');
        eraserButton.style.backgroundColor = '#212D49'
        eraserButton.style.margin = '0.1rem 0 0 0.1rem'
    }
}

function addMouseCapture() {
    grid.forEach(gridElement => {
        mouseUp = true;
    
        gridElement.addEventListener('mousedown', () => {
            mouseUp = false;
            event.preventDefault()
            paintOnHover(gridElement);
        })
    
        document.addEventListener('mouseup', () => {
            mouseUp = true;
        })
    
        gridElement.addEventListener('mouseleave', () => {
            if (mouseUp == false) paintOnHover(gridElement);
        })
    });
}

createGrid(16, 16)

resetButton.addEventListener('click', resetGrid);

randomButton.addEventListener('click', () => {
    toggleRandomButton()
})

eraserButton.addEventListener('click', () => {
    toggleEraserButton()
})

slider.oninput = () => {
    let textDisplayX = document.querySelector('#x-value')
    let textDisplayY = document.querySelector('#y-value')
    let x = +event.target.value;
    let y = +event.target.value;

    textDisplayX.textContent = x;
    textDisplayY.textContent = y;

    removeGrid();
    createGrid(x, y);
}