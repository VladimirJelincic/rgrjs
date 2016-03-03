/**
 * Created by vladimir on 01/03/16.
 */
import express from "express";
let app=express();

app.use(express.static('public'));
app.listen(3000);