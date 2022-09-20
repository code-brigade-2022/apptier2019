
const createError = require('http-errors');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Configurar variables de entorno (.env)

var dotenv = require('dotenv');
dotenv_path = '.env';
dotenv.config({path: dotenv_path});

// ...

app.get('/', (req, res) => {
  res.send('<h1>API simple</h1>' + port + " " + process.env.soketin + " " + process.env["soketon"])
})

app.get('/ruta', (req, res) => {
    res.send('<h1>Ruta</h1>')
})

// catch 404 and forward to error handler

app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler

app.use(function(err, req, res) {
    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})