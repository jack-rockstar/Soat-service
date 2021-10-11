const router = require('express').Router();

router.route('/').post((req, res) => {
    var pp = req.body;
    var response = {};
    (async () => {
        var idPage = pp.idPage;
        var url = pp.url;
        
        const page = await global.pages[idPage].page;
        page.goto(url);

        response.status = 200;
        response.message = 'Pestaña inicializada correctamente';
        response.url = url;

        res.json(response);
    })();
})

module.exports = router;