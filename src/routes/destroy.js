const fs = require('fs');

function destroy() {
    var pos = 0;
    global.pages.forEach(tab => {
        var aliveTime = Date.now() - tab.creation;
        if (aliveTime >= 30000) {
            tab.page.close();
            global.pages.splice(pos, 1);
            console.log('Pestaña cerrada: ' + tab.idPage + ' : ' + (aliveTime / 1000));
        }
        pos++;
    });
}

module.exports = destroy;