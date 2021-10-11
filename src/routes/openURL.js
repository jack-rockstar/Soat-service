const router = require('./startPage');
const startPage=require('./startPage')



router.route('/').post((req,res)=>{
    var response={};
    (async ()=>{
        await page.goto('https://facebook.com')
        console.log(idPage)
        response.message='hola'
        response.id=idPage
        res.json(response)
    }) ();
})

module.exports=router

