module.exports = (app) => {
    app.get('/pedidos', (req, res) => {
        const connection = app.config.database();

        const query = app.models.conteudoModel;

        query.getProdutoPreco(connection, (error, results) => {
            console.log(error, results)
            res.render('pages/pedidos', {dados: results})
        })
    })
}