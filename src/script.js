let paises = []; // Variable global para guardar los países

// Función para cargar los países usando fetch
async function cargarPaises() {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        paises = await res.json(); // Guardar los datos en la variable global
        mostrarPaises(paises); // Mostrar todos los países al inicio
    } catch (error) {
        console.error("Error al cargar los países", error);
    }
}

// Función para mostrar los países en el div resultado
function mostrarPaises(lista) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    lista.forEach((pais) => {
        const div = document.createElement('div');
        div.classList.add('pais');
        div.innerHTML = `
            <img src="${pais.flags.svg}" alt="Bandera de ${pais.name.official}">
            <strong>${pais.name.official}</strong><br>
            Región: ${pais.region}<br>
            Población: ${pais.population.toLocaleString()}
        `;
        resultado.appendChild(div);
    });
}

// Llamar a la función para cargar los países al iniciar
cargarPaises();