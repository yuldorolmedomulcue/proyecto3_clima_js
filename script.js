//let url base
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
// Treamos el api key de la web
let api_key = '3092130ab3fc3bc438558dd6b9ed208c';
// Definimos conversiones
let difernciaKelvin = 273.15;

//boton que escuchara el evento click
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;

    if(ciudad) {
        fetchDatosClima(ciudad);
    }
});
//funcion que se encarga de la busqueda del clima
function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
    
}
//funcion que se encarga de mostrar los datos del clima
function mostrarDatosClima(response) {

    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = response.name;
    const paisNombre = response.sys.country;
    const ciudadTemperatura = response.main.temp;
    const humedad = response.main.humidity;
    const ciudadDescripcion = response.weather[0].description;

    const icono = response.weather[0].icon;

    //crear elementos html
    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `la Temperatura es: ${Math.floor(ciudadTemperatura-difernciaKelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `la humedad es: ${humedad}%`;

    const iconoClima = document.createElement('img');
    iconoClima.src = `http://openweathermap.org/img/wn/${icono}.png`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `Descripción: ${ciudadDescripcion}`;

    //meter datos en el div con appendChild
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(iconoClima);
    divDatosClima.appendChild(descripcionInfo);
}
