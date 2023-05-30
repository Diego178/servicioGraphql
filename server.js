import {gql, ApolloServer} from 'apollo-server' 
import { obtenerContactos } from './soap.js'
import { obtenerReportes } from './rest.js';


const definicionTipos = gql`
    type Reporte {
        id: Int!
        esp32: String!
        mensaje: String!
        fecha: String!
        hora: String!
        latitud: Int!
        longitud: Int!
    }

    type Contacto {
        id: Int!
        nombre: String!
        telefono: String!
        direccion: String!
        alias: String!
        lat: String!
        lon: String!
    }

    type Query {
        todosContactos: [Contacto]!
        todosReportes: [Reporte]!
    }
`
const resolvers = {
    Query: {
      todosContactos: async () => {
        try {
          const response = await obtenerContactos();
          console.log(response)
          return (response.contacto);
        } catch (error) {
          throw new Error(error);
        }
      },
      todosReportes: async () => {
        try {
          const response = await obtenerReportes();
          console.log(response)
          return (response);
        } catch (error) {
          throw new Error(error);
        }
      }
    }
  };

const server = new ApolloServer({ 
    typeDefs: definicionTipos,
    resolvers,
    cors: true
  });
  
  server.listen({ port: 4000}).then(({ url }) => {
      console.log(`Server running at ${url}`);
  });
