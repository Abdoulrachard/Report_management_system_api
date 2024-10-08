const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs');
const TaskRouter = require('./routes/task')
const UserRouter = require('./routes/user');
const path = require('path');
mongoose.connect("mongodb+srv://abdoulrachard:Rachard-009@cluster0.cvr4l35.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      .then(() => console.log('Connexion à MongoDB réussie !'))
      .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use('/images',express.static(path.join(__dirname,'images')));
app.use('/api/tasks',TaskRouter);
app.use('/api/users',UserRouter);

module.exports = app;