const CosmosClient = require('@azure/cosmos').CosmosClient

const endpoint = process.env.DB_COSMOS_ENDPOINT
const key = process.env.DB_COSMOS_KEY

const options = {
      endpoint: endpoint,
      key: key,
      userAgentSuffix: 'Copa-CosmosDB'
    };

const client = new CosmosClient(options)

module.exports = client;