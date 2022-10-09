require('dotenv').config(); 
const express = require('express');
const sequelize = require('./config/db.js');
const routes = require('./routes/index.js');
const auth = require('./config/auth.js');

const swaggerOptions = require ('./config/swagger');
const swaggerJsDoc = require ('swagger-jsdoc');
const swaggerUI= require('swagger-ui-express');

const app = express();
app.use(express.json());
app.use(auth.optional);


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('/', routes);

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB: ', error);
}

app.listen(process.env['PORT'] || 3000, ()=> {
    console.log("Server Listening on Port ", process.env['PORT'])
});

