// const { response } = require('express');
// const express = require('express')
// const Datastore = require('nedb')

// const app = express();

// app.listen(3500, () => {
//     console.log('listening at 3500')
// })

// app.use(express.static('custom/customPublic'))

// //Add ability to parse incoming data as JSON.
// //Our data is already parsed FROM json.
// app.use(express.json({limit: '1mb'}))

// // let array = []

// const database = new Datastore({filename: './custom/db2.db'})
// database.loadDatabase()

// app.post('/postApi', (request, response) => {
//     let object = request.body
//     object.type = 'showName'
//     database.insert(object)
// })


// app.get('/getApi', (req, res) => {
//     database.find({}, (err, data) => {
//         if(err){
//             console.log(err)
//             return
//         }
//         res.json(data)
//     })
// })

const express = require('express')
const Datastore = require('nedb')

const app = express()

const database = new Datastore('./custom/hussainEatsPotatos.db')
database.loadDatabase()

app.listen(3000, () => {
    console.log('listening at 3000')
})

app.use(express.json({limit: '1mb'}))

app.use(express.static('custom/customPublic'))

app.post('/api', (request, response) => {
    database.insert(request.body) 
})

app.get('/api', (request, response) => {
    database.find({category: 'show'}, (error, data) => {
        if(error){
            console.log(error)
            return
        } else {
            response.json(data)
        }
    })
})