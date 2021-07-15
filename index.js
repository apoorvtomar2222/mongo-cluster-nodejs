const { MongoClient } = require('mongodb');

async function main () {
    const uri = "mongodb://localhost:2717,localhost:2718,localhost:2719/?replicaSet=replset";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        const result = client.db('employee').collection('office').find()

        if (result) {
            console.log(await result.toArray())
        }

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);