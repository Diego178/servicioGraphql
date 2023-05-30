import axios from 'axios';

export async function obtenerReportes() {
    return new Promise((resolve, reject) => {
    axios.get('http://127.0.0.1:8000/reportes/')
    .then((response) => {
        resolve(response.data)
    }).catch((e) => {
        reject("Error " + e);
    })
})
}