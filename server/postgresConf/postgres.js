import { Sequelize } from 'sequelize';
// import SiteModel from '../model/userSchema'

// Create a new Sequelize instance
const sequelize = new Sequelize('conqa4', 'console', 'console', {
  host: 'qa4-pgdb.cluster-cdbfksdstwqb.us-east-1.rds.amazonaws.com',  // e.g., 'localhost' or AWS RDS endpoint
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



// Export the connection function
export { connection, sequelize};
