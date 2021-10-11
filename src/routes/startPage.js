const router = require('express').Router();

router.route('/').post((req, res) => {
    var response = {};
    (async () => {
        var idPage = Date.now();
        const page = await global.browser.newPage();
        global.pages[idPage] = page;
       

        //response
        response.status = 200;
        response.message = 'Pestaña inicializada correctamenta';
        response.data = idPage;
        
        res.json(response)
        
        return idPage
    })();
})

module.exports = router