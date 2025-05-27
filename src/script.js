let paises = []; // Variable global para guardar los países

const resultado = document.getElementById('resultado');
const buscador = document.getElementById('buscar');

// Obtener los países usando fetch y then
fetch('https://restcountries.com/v3.1/all')
  .then(respuesta => respuesta.json())
  .then(datos => {
    paises = datos; // Guardar los datos en la variable global
    paises.forEach(pais => { // Mostrar todos los países al inicio
      const div = document.createElement('div');
      div.classList.add('pais');
      div.innerHTML = `<img src='${pais.flags.svg}' alt='Bandera de ${pais.name.official}'>
        <strong>${pais.name.official}</strong><br>
        Región: ${pais.region}<br>
        Población: ${pais.population.toLocaleString()}`;
      resultado.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error al cargar los países", error);
  });

// Evento para filtrar países según lo que escribe el usuario
buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  resultado.innerHTML = '';
  paises
    .filter(pais => pais.name.official.toLowerCase().includes(texto))
    .forEach(pais => {
      const div = document.createElement('div');
      div.classList.add('pais');
      div.innerHTML = `<img src='${pais.flags.svg}' alt='Bandera de ${pais.name.official}'>
        <strong>${pais.name.official}</strong><br>
        Región: ${pais.region}<br>
        Población: ${pais.population.toLocaleString()}`;
      resultado.appendChild(div);
    });
});