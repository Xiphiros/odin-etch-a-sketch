function createGrid(x, y) {
    container = document.querySelector('.content .container')
    containerWidth = container.offsetWidth / 16;
    containerHeight = container.offsetHeight / 16;

    for (let i = 0; i < x * y; i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid');
        gridElement.style.width = `${containerWidth / x}rem`
        gridElement.style.height = `${containerHeight / y}rem`
        container.appendChild(gridElement);
    }
}

createGrid(16, 16)

grid = document.querySelectorAll('.grid');

grid.forEach(gridElement => {
    gridElement.addEventListener('mouseover', () => {
        paintOnHover(gridElement);
    })
});

function paintOnHover(gridElement) {
    gridElement.style.backgroundColor = '#000'
}