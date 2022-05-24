import express from "express";
import 'dotenv/config';

const port = process.env.port
const app = express()

app.use(express.json())

app.get('/',  (request, response) =>
    response.send('Sei nel progetto forkato')
)

app.get('/test', (request, response) => {
    response
        .status(200)
        .json({
            'data': 'Valore',
            'status': 'Ok',
            'value': 1,
        })
})

app.all('*', (request, response) => {
    console.error('sei in una risorsa non corretta.')
    response
        .status(500)
        .json({
            'success': false,
            'code': 1001,
            'message': "Risorsa non disponibile"
        })
})

app.listen(port || 3000)