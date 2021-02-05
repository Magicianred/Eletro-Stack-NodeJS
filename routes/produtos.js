module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        const connection = app.config.database();

        const query = app.models.conteudoModel;

        query.getConteudo(connection, (error, results) => {
            console.log(error, results)
            res.render('pages/produtos', {dados: results})
        });
    });
}