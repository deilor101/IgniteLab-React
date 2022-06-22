import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ou5tbb11qa01z41fw0c0o9/master',
    cache: new InMemoryCache()
})