require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static('build'))
const cors = require('cors');
const Person = require('./models/person')
app.use(cors());

app.use(express.json());

app.get('/api/persons', (request, response) => {

    Person.find({}).then(person => {
        response.json(person)
    })
})


// use Mongoose findById method
app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })

})


const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })