const express = require('express');
const app = express();

const hostname = "localhost";
const port = 3000;

app.get('/', (req, res)=> {
    res.send("Welcome to Lab 0");
});

// Query String Parameters
// /greet?name=Sean&year=2002
app.get('/greet', (req, res)=> {

    let name = req.query.name;
    let year = parseInt(req.query.year);
    res.send(`<h1> Hello, ${name}! You are ${2021 - year} or ${2022 -year} years old.</h1>`);
});

// Route Parameters
// /math/6/times/7
app.get('/math/:num1/:math/:num2', (req, res)=> {

    let num1 = parseInt(req.params.num1);
    console.log(num1);
    let num2 = parseInt(req.params.num2);
    console.log(num2);

    let math = req.params.math;

    console.log(math);
    switch(math) {
        case "plus":
            res.send(`<h1> ${num1 + num2} </h1>`);
          break;
        case "minus":
            res.send(`<h1> ${num1 - num2} </h1>`);
          break;
        case "times":
            res.send(`<h1> ${num1 * num2} </h1>`);
          break;
        case "dividedby":
            res.send(`<h1> ${num1 / num2} </h1>`);
          break;
        default:
            res.send(`<h1> Please use a different wordle. </h1>`);
      }

});


app.listen(port, ()=> {
    console.log(`Listening on http://${hostname}:${port} ...`);
});