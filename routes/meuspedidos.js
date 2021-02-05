module.exports = (app) => {
    app.get('/meuspedidos', (req, res) => {
        const connection = app.config.database();

        const query = app.models.conteudoModel;

        query.getPedidos(connection, (error, results) => {
            console.log(error, results)
            res.render('pages/meuspedidos', {dados: results})
        })
    })
}

