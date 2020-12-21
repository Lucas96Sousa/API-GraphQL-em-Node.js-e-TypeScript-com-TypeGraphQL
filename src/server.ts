import 'reflect-metadata'
import * as dotenv from  'dotenv'
dotenv.config({path: '../.env'})

import './utils/connection'
import { buildSchema } from 'type-graphql'

import {ApolloServer} from 'apollo-server'
import CategoryResolver from './graphql/category/CategoryResolver'
import VideoResolver from './graphql/Video/VideoResolver'




async function bootstrap () {
const schema = await buildSchema({
  resolvers: [CategoryResolver, VideoResolver]
})

const server = new ApolloServer({schema})

server.listen(4100, () => {
  console.log(`Running http://localhost:4100`)
})
}

bootstrap()