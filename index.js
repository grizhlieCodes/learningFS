const express = require('express')
// const fs = require('fs')

// fs.readFile('README.md', (err, data) => {
//     console.log(data.toString())
// })

const app = express();

app.listen(3000, () => {
    console.log('listening at 3000')
})

app.use(express.static('public'))