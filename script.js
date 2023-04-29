const gridContainer = document.querySelector('grid_container');
let hovertimes = 0;

function randomColorGenerator() {
    return Math.floor(Math.random()*16777215).toString(16);
}

for (i = 0; i < 16; ++i) {
    let row = document.createElement('row');
    for (x = 0; x < 16; ++x) {
        let unit = document.createElement('unit')
        row.appendChild(unit);
    }
    gridContainer.appendChild(row);
}

let currentGrid = document.querySelectorAll('unit');

currentGrid.forEach((elem) => {
    elem.addEventListener('mouseover', (e) => {
        let x = randomColorGenerator();
        elem.style.backgroundColor = `#${x}`;
    });
});

const newGrid = document.querySelector('button');

newGrid.addEventListener('click', () => {
    let x = prompt('Please input the number of rows and columns (1 - 100 Only):');
    if (isNaN(+x) || +x < 1 || +x > 100 || !Number.isInteger(+x)) {alert("You have not inputted a valid number, please try again");
    return;}

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    for (i = 0; i < +x; ++i) {
        let row = document.createElement('row');
        for (z = 0; z < +x; ++z) {
            let unit = document.createElement('unit')
            row.appendChild(unit);
        }
        gridContainer.appendChild(row);
    }

    let currentGrid = document.querySelectorAll('unit');

    currentGrid.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            let x = randomColorGenerator();
            elem.style.backgroundColor = `#${x}`;
        });
    });
    });