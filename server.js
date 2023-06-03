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
        latitude: Float!
        longitude: Float!
    }

    type Contacto {
        id: Int!
        nombre: String!
        telefono: String!
        direccion: String!
        alias: String!
        latitude: Float!
        longitude: Float!
    }

    type Query {
        todosContactos: [Contacto]!
        todosReportes: [Reporte]!
    }

    type Mutation {
      crearContacto(nombre: String!, telefono: String!, direccion: String!, 
        alias: String!, latitude: Float!, longitude: Float!): Boolean!
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
    },

    Mutation: {
      crearContacto: async (parent, args) => {

        try {
          const response = await agregarContactos(
            args.nombre,
            args.telefono,
            args.direccion,
            args.alias,
            args.latitude,
            args.longitude)

            console.log(response)
            return (response);
        } catch (e){
          throw new Error(error);
        } 
      },
    }
  };

const server = new ApolloServer({ 
    typeDefs: definicionTipos,
    resolvers,
    cors: true
  });

  
  server.listen({ port: process.env.PORT || 4000}).then(({ url }) => {
      console.log(`Server running at ${url}`);
  });
