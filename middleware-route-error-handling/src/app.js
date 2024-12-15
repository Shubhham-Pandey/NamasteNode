const express = require('express');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/User');


app.post('/signup', async (req, res) => {
    try {
        const saveUser = new User({
            firstName: "shubham",
            lastName: "Pandey",
            emailId: "shubham@pandey.com",
            password: "shubham@123",
            age: "28",
            gender: "Male"
        });
    
        const result = await saveUser.save();
        res.send(result);
    } catch(error) {
        res.send(error);
    }
});

connectDB()
    .then(() => {
        console.log("Connection established.");
        app.listen('7777', () => {
            console.log("App is listening to the port 7777");
        });
    }).catch((err)=>{
        console.log("Connection is not established.");
    }); 