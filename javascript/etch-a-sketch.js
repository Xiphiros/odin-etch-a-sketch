createGrid(16, 16)

grid = document.querySelectorAll('.grid');
resetButton = document.querySelector('#reset-button');

function createGrid(x, y) {
    container = document.querySelector('.content .container')
    containerWidth = container.offsetWidth / 16;
    containerHeight = container.offsetHeight / 16;

    for (let i = 0; i < x * y; i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid');
        gridElement.style.width = `${containerWidth / x}rem`
        gridElement.style.height = `${containerHeight / y}rem`
        gridElement.setAttribute('draggable', false)
        container.appendChild(gridElement);
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

resetButton.addEventListener('click', resetGrid);