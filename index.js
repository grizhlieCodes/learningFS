const express = require('express')
const Datastore = require('nedb')

const app = express();

app.listen(3000, () => {
    console.log('listening at 3000')
})
//serve static files from the chosen 'root' of static files, public in this
//case.
app.use(express.static('public'))
//Allow our server to be able to receive json data
app.use(express.json({limit: '1mb'}))

const database = new Datastore('database.db')
database.loadDatabase();

//Instruct our server what to do with the received data.
//Same 'link' as our fetch function in our client side.
app.post('/api', (request, response) => {
    const data = request.body
    const timestamp = Date.now();

    data.timestamp = timestamp
    database.insert(data)

    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    })
})