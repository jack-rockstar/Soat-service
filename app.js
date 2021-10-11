const express=require('express');
const cors=require('cors');

//funciones
const router=require('./src/rimac');
const setup = require('./src/routes/setup');
const startPage=require('./src/routes/startPage')

const {json, urlencoded}=express
const app=express()
const port=process.env.PORT || 8080

app.use(json())
app.use(urlencoded({extended:false}))

const corsOptions={
    origin:'*',
    optionSuccessStatus:200
}

app.use(cors(corsOptions))

app.use(router)
global.url_soat='';
global.browser=null;
global.constantes={};
global.pages=[];

app.use('/', (req,res)=>{
    res.send('Web Scrapping v1.0.0')
})

app.listen(port , async function(){
    console.log('=== DESPLEGANDO SERVIDOR CON PUPPETEER ===')
    await setup()
    
    console.log(`=== SERVIDOR LISTO PARA COTIZAR [${port}] ===`)
})
