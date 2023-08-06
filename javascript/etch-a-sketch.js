let grid;
slider = document.querySelector('.slider');
resetButton = document.querySelector('.reset-button');

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
    gridElement.style.backgroundColor = '#000'
}

function resetGrid() {
    grid.forEach(gridElement => {
        gridElement.style.backgroundColor = '#FFF';
    })
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