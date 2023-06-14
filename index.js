const express = require('express');
const app = express();
app.use(express.static('build'))
const cors = require('cors');
require('dotenv').config();
const Person = require('./models/person')
app.use(cors());

app.use(express.json());

app.get('/api/persons', (request, response) => {

    Person.find({}).then(person => {
        response.json(person)
    })
})

/*
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id) // id must be a number
    persons = persons.filter(person => person.id !== id) // removes deleted
    response.status(204).end() // successful deletion.No data returned

})
*/
// use Mongoose findById method
app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })

})


const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })