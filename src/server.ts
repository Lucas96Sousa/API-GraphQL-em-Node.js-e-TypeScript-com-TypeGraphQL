import 'reflect-metadata'
import * as dotenv from  'dotenv'
import './utils/connection'
import { buildSchema } from 'type-graphql'

import {ApolloServer} from 'apollo-server'
import CategoryResolver from './graphql/category/CategoryResolver'

dotenv.config()


async function bootstrap () {
const schema = await buildSchema({
  resolvers: [CategoryResolver]
})

const server = new ApolloServer({schema})

server.listen(5000, () => {
  console.log(`Running on port: 5000`)
})
}

bootstrap()