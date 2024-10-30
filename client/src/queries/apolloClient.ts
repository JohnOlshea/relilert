"use client"

import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject, split } from "@apollo/client";

const httpUrl: string = 'http://localhost:5000/graphql'
const wsUrl: string = 'ws://localhost:5000/graphql'

const httpLink: ApolloLink = createHttpLink({
  uri: httpUrl,
  credentials: 'include'
});

const cache: InMemoryCache = new InMemoryCache();


const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true // set to false for production
});

export { apolloClient };