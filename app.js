const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send("Hey, it works!");
});

// Query String Parameters
// /pokemon?name=pikachu
app.get('/pokemon', (req, res)=> {

    let name = req.query.name.toUpperCase();
    res.send(`<h1> ${name} </h1>`);

});

// Route Parameters
// /pokemon/pikachu
app.get('/timeten/:id', (req, res)=> {

    let id = parseInt(req.params.id);
    console.log(id);

    res.send(`<h1> ${id * 10} </h1>`);

});

const port = 3000
app.listen(port, ()=> {
    console.log(`Listening on port ${port} ...`);
});