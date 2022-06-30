import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl518ov9h1eui01t36ddm579b/master',
    cache: new InMemoryCache()
})
