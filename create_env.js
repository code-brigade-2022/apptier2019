// Genera .env

var fs = require('fs');
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

// Your Azure Key Vault name and secret name
const keyVaultName = "copatry-keyvault";
const keyVaultUri = `https://${keyVaultName}.vault.azure.net`;
const secret1 = "db-user";
const secret2 = "db-password";
const secret3 = "db-name";

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

            env_vars = `DB_USER = ${db_user} \n DB_PASSWORD = ${db_password} \n DB_NAME = ${db_name}` 
    
            fs.writeFile('./env/.env', env_vars, function (err) {
                if (err) throw err;
                console.log('Se creó archivo .env exitosamente.');
                });

        }).catch(err3 => {
            console.log(err3);
        })

    }).catch(err2 => {
        console.log(err2);
    })

}).catch(err1 => {
    console.log(err1);
})