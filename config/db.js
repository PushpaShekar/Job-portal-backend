const mongoose = require('mongoose')
const configureDB = async () => { 
   
    mongoose.connect('mongodb://127.0.0.1:27017/jp-dec23') 
        .then(() => {
            console.log('connected to db successfully')
        })
        .catch((err) => {
            console.log('error connecting to db', err)
        })
}

// common js module loader 
module.exports = configureDB