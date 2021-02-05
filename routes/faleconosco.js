module.exports = (app) => {
    app.get('/faleconosco', (req, res) => {
        res.render('pages/faleconosco');
    })
}