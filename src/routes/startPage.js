const router = require('express').Router();

router.route('/').post((req, res) => {
    var response = {};
    (async () => {
        var idPage = Date.now();
        const page = await global.browser.newPage();
        global.pages[idPage] = {};
        global.pages[idPage].page = page;
        global.pages[idPage].creation = idPage;

        // Seteando el response
        response.status = 200;
        response.message = 'Pestaña inicializada correctamente';
        response.data = idPage;

        res.json(response);
    })();
})

module.exports = router;