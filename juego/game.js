const BotonJuego = document.querySelector(".boton-juego")

BotonJuego.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "../juego.html";
})






async function respuesta(){

    const lat = document.querySelector(".latitud").value;
    const long = document.querySelector(".longitud").value;


    if (!lat || !long) {
        document.getElementById("contenedorClima").textContent = "Ingresa latitud y longitud.";
        return;
    }
    
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f38717dfb03b9b96c032fe8e4c025af6`

    try{
        const resp = await fetch(url);
        
        const data = await resp.json();
        
        document.getElementById("contenedorClima").innerHTML = `
        <p><b>${data.name}</b> - ${data.weather[0].description} </p>
        <p>🌡️ Temp: ${data.main.temp}°K</p>
        <p>💧 Humedad: ${data.main.humidity} %</p>`;
    }  catch (error) {
        document.getElementById("clima").textContent = "Error obteniendo datos.";
        console.error(error);
    }

    const mostrar = document.getElementById("contenedorClima")

    mostrar.style.display= 'block';
}