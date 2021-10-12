const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');


router.route('/').post((req, res) => {
    var response = {};
    (async () => {
        const page = await global.browser.newPage();
        var tab = {};
        tab.idPage = uuidv4();
        tab.page = page;
        tab.creation = Date.now();
        global.pages.push(tab);

        // Seteando el response
        response.status = 200;
        response.message = 'Pestaña inicializada correctamente';
        response.data = tab.idPage;

        res.json(response);
    })();
})

module.exports = router;