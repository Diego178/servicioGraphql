import axios from 'axios';

export async function obtenerReportes() {
    return new Promise((resolve, reject) => {
    axios.get('https://apirest-production-709d.up.railway.app/reportes/')
    .then((response) => {
        resolve(response.data)
    }).catch((e) => {
        reject("Error " + e);
    })
})
}

export async function crearReporte(esp32, mensaje, fecha, hora, latitude, longitude) {
    return new Promise((resolve, reject) => {
    axios.post('https://apirest-production-709d.up.railway.app/reportes/post/',
    {
        "esp32": esp32,
        "mensaje": mensaje,
        "fecha": fecha,
        "hora": hora,
        "latitude": latitude,
        "longitude": longitude
    })
    .then((response) => {
        resolve(response.data)
    }).catch((e) => {
        reject("Error " + e);
    })
})
}