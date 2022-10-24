import * as mongodb from 'mongodb';
import * as express from 'express'

const app = express();

app.get('*', (_req, res) => {
    const response = '<div>ABC</div>'

    res.send(response);
})

app.listen(3000)

console.log('Hello world')