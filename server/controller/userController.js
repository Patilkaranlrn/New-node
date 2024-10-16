import { where } from "sequelize";
// import { sequelize } from "../postgresConf/postgres";


import { Sequelize, DataTypes } from 'sequelize';
// import SiteModel from '../model/userSchema'

// Create a new Sequelize instance
const sequelize = new Sequelize('conqa4', 'console', 'console', {
  host: '',  // e.g., 'localhost' or AWS RDS endpoint
  dialect: 'postgres',
  logging: false, port: 1526,
});



// Function to authenticate and test the connection
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};



const SiteModel = sequelize.define('parent_site',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,    
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        isLowercase:true,
        unique:true
    },
    lcec_site_id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true
    }
    
  },{
    tableName: 'parent_site',  // This forces Sequelize to use this exact table name
    timestamps: false,           // Optional: If you want `createdAt` and `updatedAt`
  }
  
  );

export const getAllEmp=async(req,res)=>{
    try{
        const users= await SiteModel.findAll();
            if (users.length==0){
                return res.status(200).json({"error":"users not found"})
            }
            console.info("Users",users)
            return res.status(200).json(users)
    }catch(error){
        console.log(error)
        return res.status(500).json({"error":"Internal server error"})



    }
}

export const addEmp=async(req,res)=>{
    const {name,email,designation,empId} = req.body;
    try{
        const emp=await SiteModel.findOne({where:{empId:empId}})
        if(emp==null){
            await SiteModel.create(req.body);
            return res.status(201).json({message:"emp added successfully"})
        }
        return res.status(200).json({message:"already found "})

    }catch(e){
        console.log(error)
        return res.status(500).json({"error":"Internal server error"})
    }
}

// export const updateEmp=async(req,res)=>{
//     let empId = req.params.empId
//     try{
//         const emp=await SiteModel.update(res.body,{where:{empId}})
//         return res.status.json({message:"Updated successfully"})
        

//     }catch(e){
//         console.log(e)
//         return res.status(500).json({"error":"Internal server error"})
//     }

// }