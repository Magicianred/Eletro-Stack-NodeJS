module.exports = (app) => {
    app.get('/lojas', (req, res) => {
        res.render('pages/lojas');
    })
}