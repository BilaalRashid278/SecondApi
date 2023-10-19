const mongoose = require('mongoose');

const url = 'mongodb+srv://bilaalrashid5566:khalifage56@cluster0.2yiurni.mongodb.net/producs-api'
const ConnectToDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/SecondApi').then(() => console.log("Successfully connected to database")).catch(err => console.log('Error connecting to database'));
};
// const ConnectToDatabase = () => {
//     mongoose.connect(url).then(() => console.log("Successfully connected to database")).catch(err => console.log(err));
// };

module.exports = {ConnectToDatabase}