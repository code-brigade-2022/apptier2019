module.exports = function(app) {
    app.get('/', (req, res) => {
        res.send('<h1>Hola</h1>')
    })

    app.get('/airports', (req, res) => {
        res.send('<h1>Airports</h1>')
    })
      
    app.get('/distances', (req, res) => {
        res.send('<h1>Distances</h1>')
    })
};
