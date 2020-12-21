import 'reflect-metadata'
import * as dotenv from  'dotenv'
import './utils/connection'
import { buildSchema } from 'type-graphql'

import {ApolloServer} from 'apollo-server'
import CategoryResolver from './graphql/category/CategoryResolver'

dotenv.config({path: '../.env'})


async function bootstrap () {
const schema = await buildSchema({
  resolvers: [CategoryResolver]
})

const server = new ApolloServer({schema})

server.listen(process.env.PORT, () => {
  console.log(`Running http://localhost:${process.env.PORT}`)
})
}

bootstrap()