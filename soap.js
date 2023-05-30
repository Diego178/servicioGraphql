import soap from 'soap'

export async function obtenerContactos() {
    var xml = `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <ObtenerContactosRequest xmlns="https://t4is.hiloxDevelop/emergencias">[any]</ObtenerContactosRequest>
    </Body>
    </Envelope>`

    var url = "http://localhost:8080/ws/emergencias.wsdl"

    return new Promise((resolve, reject) => {
        soap.createClient(url, function(error, client){
            if(error){
                reject("Error: "+ error)
            }else{
                client.ObtenerContactos(xml, function(error, response){
                    if(error){
                        reject("Error: "+ error)
                    }else{
                        resolve(response);
                    }
                })
            }
        });
    });
}