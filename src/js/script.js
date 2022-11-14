// Arquivo de script

const app = {
    matrix: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
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
        '<div>' + 
            app.matrix.reduce((acc, row) => 
                acc + '<div>' + 
                    row.reduce((acc, field) => 
                        acc + '<span>' + field + '</span>', '') 
                    + '</div>', 
                '') 
            + 
        '</div>'
}

const setValueOnMatrix = (row, column) => 
    [...app.matrix][row][column] = app.labels[app.currentLabel]

window.addEventListener('load', () => {
    startNewGame()
})