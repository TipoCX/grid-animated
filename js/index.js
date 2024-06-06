const wrapper = document.getElementById("tiles");
const colors = [
    'rgb(229, 57, 53)',
    'rgb(253, 120, 0)',
    'rgb(253, 216, 53)',
    'rgb(100, 180, 60)',
    'rgb(33, 150, 243)',
    'rgb(120, 50, 120)',
    'rgb(0, 0, 0)',
]

let count = -1;

let rows = Math.floor(document.documentElement.clientHeight / 50),
    columns = Math.floor(document.documentElement.clientWidth / 50);


const handleOnClick = index => {
    count += 1;

    anime({
        targets: '.tile',
        backgroundColor: colors[count % (colors.length)],
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })

    if (colors[count % (colors.length)] == 'rgb(0, 0, 0)') {
        wrapper.style.gap = '1px'
    } else {
        wrapper.style.gap = '0'

    }
}

const createTile = index => {
    const tile = document.createElement('div');
    tile.classList.add('tile');

    tile.onclick = e => handleOnClick(index);

    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () => {
    wrapper.innerHTML = '';

    rows = Math.floor(document.documentElement.clientHeight / 50);
    columns = Math.floor(document.documentElement.clientWidth / 50);

    wrapper.style.setProperty('--rows', rows)
    wrapper.style.setProperty('--columns', columns)

    createTiles(columns * rows);
}

createGrid()
window.onresize = () => createGrid()
