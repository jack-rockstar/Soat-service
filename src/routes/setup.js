const puppeteer = require('puppeteer');
const fs = require('fs');

async function setup() {
    console.log('    ⤷ Inicializando navegador Chromium ↻');
    // Obteniendo configuración para navegar
    try {
        var launchConfig = JSON.parse(fs.readFileSync('json/launch.json', 'utf8'));
    } catch (error) {
        var launchConfig = {
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage=true',
                '--disable-accelerated-2d-canvas=true',
                '--disable-gpu',
            ]
        };
    }

    // Abriendo el navegador
    global.browser = await puppeteer.launch(launchConfig);
    console.log('    ⤷ Chromium listo para navegar ✓');

    // Abriendo el navegador por si se desconecta
    global.browser.on('disconnected', setup);
}

module.exports = setup;