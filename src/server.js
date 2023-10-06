const app = require('./app.js');
const {ConnectToDatabase} = require('./db/connection.js');
const  PORT = process.env.PORT || 5000

// Database connection
ConnectToDatabase();


app.listen(PORT,() => {
    console.log(`Sever are listening on http://localhost:${PORT}/api/v1/`);
});