
import express from 'express'
import debug from 'debug';

const log = debug('11-express:index');
const port = process.env.PORT ||  3000

const app = express()
log('Express app created')

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.post('/', (_req, res) => {
    res.statusCode = 201
    res.send('Hello Post!')
})

app.get('/api', (_req, res) => {
  res.send('API rest')
})

app.listen(port, () => {
  log(`Example app listening on port ${port}`)
})
