import axios from 'axios';

export async function obtenerReportes() {
    return new Promise((resolve, reject) => {
    axios.get('http:127.0.0.1:8000/reportes/')
    .then((response) => {
        resolve(response.data)
    }).catch((e) => {
        reject("Error " + e);
    })
})
}

export async function crearReporte(esp32, mensaje, fecha, hora, latitude, longitude) {
    return new Promise((resolve, reject) => {
    axios.post('http://127.0.0.1:8000/reportes/post/',
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