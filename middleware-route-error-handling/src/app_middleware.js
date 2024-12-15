const express = require('express');
const app = express();
const { adminAuth, userAuth } = require('./middlewares/auth');

app.use('/admin', adminAuth);

const RH1 = (req, res, next) => {
    console.log("inside RH1");
    next();
}

const RH2 = (req, res, next) => {
    console.log("inside RH2");
    next();
}

const RH3 = (req, res, next) => {
    console.log("inside RH3");
    next();
}

app.get("/user", [RH1, RH2, RH3], (req, res) => {
        console.log("inside RH4");
        res.send("Hello user from RH4");
    }
);

app.get('/admin/getUserData', (req, res) => {
    res.send('User Data Fetched Successfully.');
});

app.get('/admin/deleteUser', (req, res) => {
    res.send('User Deleted Successfully.');
});

app.post('/user/signup', (req, res) => {
    res.send("User Signed Up Successfully.");
});

app.post('/user/login', (req, res) => {
    res.send("User Logged In Successfully.");
});

app.post('/user/update-user-profile', userAuth, (req, res) => {
    res.send('User Profile Updated Successfully.');
});

app.use('/', (err, req, res, next) => {
    res.send('Something went wrong.');
});

app.listen('7777', () => {
    console.log(`Server listening to the port 7777`);
});