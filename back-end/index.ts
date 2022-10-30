import * as mongodb from 'mongodb';
import * as express from 'express'

const app = express();
const mongoUrl = "mongodb://mongo:27017";
const client = new mongodb.MongoClient(mongoUrl);

app.get('*', async (_req, res) => {
    const mongoClient = client.connect();
    const dbsList = await (await mongoClient).db().admin().listDatabases();
    const response = `<div>${dbsList.databases.map(db => '<br>' + db.name).join()}</div>`

    res.send(response);
})

app.listen(3000)

console.log('Ready')