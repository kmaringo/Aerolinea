let fecha = new Date();
const formulario = document.getElementById('formulario');
const message = document.getElementById('mostrar');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const returning = document.getElementById('returning').value;
    const departing = document.getElementById('departing').value;
    console.log(returning)
    try {
        if (new Date(returning) < fecha || new Date(departing) < fecha) {
            throw 'Error'
        }

        if (new Date(departing) > new Date(returning)) {
            throw 'Error'
        }
        alert('Se completo el proceso')
    } catch (e) {
        alert(e)
    }
})
