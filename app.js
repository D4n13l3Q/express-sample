import express from "express";
import 'dotenv/config';
import logMiddleware from "./middlewares/log.middleware.js";
import authMiddleware from "./middlewares/auth.middleware.js";

const port = process.env.PORT
const app = express()

app.use(express.json())
// app.use(logMiddleware); // <--
// app.use(authMiddleware); //<---

app.get('/', logMiddleware, (request, response) =>
    response.send('Sei nel progetto forkato')
)

app.get(
    '/test',
    [authMiddleware, logMiddleware],
    (request, response) => {
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