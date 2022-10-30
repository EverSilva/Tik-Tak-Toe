// Arquivo de script

const app = {
    matrix: [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ],
    $element: document.querySelector('[data-js="tik-tak-toe"]')
}

console.log(app)

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

window.addEventListener('load', () => {
    renderMatrix()
})