const express = require('express');
const cors = require('cors');

const setup = require('./src/routes/setup');
const router = require('./src/rimac');

const { json, urlencoded } = express;
const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(router);
global.browser = null;
global.pages = {};

app.use('/', (req, res) => {
    res.send('Centro de emisión en RIMAC SEGUROS (Web Scrapping v1.0.0)');
})

app.listen(port, async function () {
    console.log('=== DESPLEGANDO SERVIDOR CON PUPPETEER ===');
    await setup();
    console.log(`=== SERVIDOR DESPLEGADO CORRECTAMENTE [${port}] ===`)
})