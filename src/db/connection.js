const mongoose = require('mongoose');


const ConnectToDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/SecondApi').then(() => console.log("Successfully connected to database")).catch(err => console.log('Error connecting to database'));
};

module.exports = {ConnectToDatabase}