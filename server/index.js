import express from "express";
import { connection } from "./postgresConf/postgres.js";
import router from "./view/routes.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import { Sequelize,DataTypes } from "sequelize";

const app=express();
const PORT=8000; 

 app.use(cors());
 app.use(express.json());
app.use (router);
app.use(bodyParser.json());
app.use(router);

// Start the server
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
});

connection();