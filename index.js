require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static('build'))
const cors = require('cors');
const person = require('./models/person')
app.use(cors());

app.use(express.json());

app.get('/api/persons', (request, response) => {

    person.find({}).then(person => {
        response.json(person)
    })
})


// use Mongoose findById method
app.get('/api/persons/:id', (request, response) => {
    person.findById(request.params.id).then(person => {
        response.json(person)
    })

})


const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })