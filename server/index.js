const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Axios = require("axios");

const app = express()

app.use(cors());
app.use(bodyParser.json());

const port = 3001

app.get('/api/recipe/?', (req, res) => {
    console.log('working')
    Axios.get(`http://www.recipepuppy.com/api/?i=${ req.query.ingredients }&q=${ req.query.name }`).then( results => {
        res.send(results.data)
})

})

app.listen(port, () => {
    console.log(`Listening in on port ${ port }`)
})