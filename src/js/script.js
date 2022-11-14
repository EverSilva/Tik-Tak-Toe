// Arquivo de script

const app = {
    matrix: [
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['X', 'O', ' ']
    ],
    $element: document.querySelector('[data-js="tik-tak-toe"]'),
    labels: ['X', 'O'],
    currentLabel: 0,
}

console.log(app)

const startNewGame = () => {
    renderMatrix()
}

const renderMatrix = () => {
    app.$element.innerHTML = 
            app.matrix.reduce((acc, row) => 
                acc + '<div class="row">' + 
                    row.reduce((acc, field) => 
                        acc + 
                        `<span class="column ${getClassFromValue(field)}">`
                             + field + 
                        '</span>', '') 
                    + '</div>', 
                '')         
}

const setValueOnMatrix = (row, column) => 
    [...app.matrix][row][column] = app.labels[app.currentLabel]

const getClassFromValue = value => 
    value === 'X' ? 'cross' : 
    value === 'O' ? 'circle' : 
    'empty'

window.addEventListener('load', () => {
    startNewGame()
})