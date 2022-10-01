// Genera .env

var fs = require('fs');
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

// Your Azure Key Vault name and secret name
const keyVaultName = "copatry-keyvault";
const keyVaultUri = `https://${keyVaultName}.vault.azure.net`;
const secret1 = "db-cosmos-key";
const secret2 = "db-cosmos-endpoint";
const secret3 = "db-name";
const secret4 = "app-insights-conn";

// Authenticate to Azure
const credential = new DefaultAzureCredential();
const client = new SecretClient(keyVaultUri, credential);

// Get Secret with Azure SDK for JS
const getSecret = async (secretName) => {
    return (await client.getSecret(secretName)).value;
}

getSecret(secret1).then(db_user => {

    getSecret(secret2).then(db_password => {

        getSecret(secret3).then(db_name => {

            getSecret(secret3).then(app_insights_conn => {

                env_vars = `DB_COSMOS_KEY = ${db_user} \n DB_COSMOS_ENDPOINT = ${db_password} \n DB_NAME = ${db_name} \n APPLICATIONINSIGHTS_CONNECTION_STRING = ${app_insights_conn}` 
        
                fs.writeFile('./env/.env', env_vars, function (err) {
                    if (err) throw err;
                    console.log('Se creó archivo .env exitosamente.');
                    });

            }).catch(err4 => {
                console.log(err4);
            })

        }).catch(err3 => {
            console.log(err3);
        })

    }).catch(err2 => {
        console.log(err2);
    })

}).catch(err1 => {
    console.log(err1);
})