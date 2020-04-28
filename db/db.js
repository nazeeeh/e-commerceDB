const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const myDbConnection = mysql.createConnection(
    {
        host : dbConfig.HOST,
        user : dbConfig.USER,
        password : dbConfig.PASSWORD,
        database : dbConfig.DATABASE
    }
);

myDbConnection.connect((error) => {
    if(!error)
    {
        console.log("Database connected successfully");
    }
    else
    {
        console.log("There was an Error connecting ", error);
    }
});

module.exports = myDbConnection;