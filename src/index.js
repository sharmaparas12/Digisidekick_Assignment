const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const PORT=3099;
const apiRoutes=require('./Routes/index');
const connect=require('./config/database');

const PrepareAndStartserver= async () => {

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    await connect();


   
    app.listen(PORT,async () => {
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));
        
        app.use('/api',apiRoutes);
    
    
    });



}



PrepareAndStartserver();
