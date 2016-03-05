/**
 * Created by vladimir on 01/03/16.
 */
import express from "express";
import {MongoClient} from 'mongodb';
let app=express();
app.use(express.static('public'));

let db;
let mongoUrl="mongodb://rgrjs:asmodeus@ds019698.mlab.com:19698/rgrjs_vj"
MongoClient.connect(mongoUrl,(err,database)=>{
    if(err) throw err;
    db=database;

    app.listen(3000,()=>console.log('Listening on port 3000'));

});
app.get('/data/links',(req,res)=>{
    db.collection("links").find({}).toArray((err,links)=>{
        if(err) throw err;
        res.json(links);
    })
})