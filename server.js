const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const constants = require('./config/constants');
const dbCon = require('./config/db_config/database')
const PORT = constants.common.PORT;
const routes = require('./routes/index');
mongoose.connect(dbCon.mongoConf.conString, dbCon.mongoConf.options)
    .then((res) => { console.log("MongoDB connection established"); })
    .catch((err) => { console.log("Couldnt connect to MongoDB" + err); })

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));    
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.use('/api', routes());


app.get('/', (req, res, next) => {
    res.send("Hello from server");
})

app.listen(PORT, () => {
    console.log("Server running on port :: " + PORT);
}) 
