function createGrid(x, y) {
    container = document.querySelector('.content .container')
    containerWidth = container.offsetWidth / 16;
    containerHeight = container.offsetHeight / 16;

    console.log(containerWidth);
    console.log(containerHeight);

    for (let i = 0; i < x * y; i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid');
        gridElement.style.width = `${containerWidth / x}rem`
        gridElement.style.height = `${containerHeight / y}rem`
        container.appendChild(gridElement);
    }
}

createGrid(16, 16)
console.log(document.querySelectorAll('.grid'));

/*      
    grid = document.createElement('div');
    container = document.querySelector('.content .container')

    grid.classList.add('grid');
    container.appendChild(grid);

*/