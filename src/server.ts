import 'reflect-metadata'
import * as dotenv from  'dotenv'
dotenv.config({path: '../.env'})

import './utils/connection'
import { buildSchema } from 'type-graphql'

import {ApolloServer} from 'apollo-server'
import CategoryResolver from './graphql/category/CategoryResolver'




async function bootstrap () {
const schema = await buildSchema({
  resolvers: [CategoryResolver]
})

const server = new ApolloServer({schema})

server.listen(process.env.PORT, () => {
  console.log(`Running http://localhost:${5000}`)
})
}

bootstrap()