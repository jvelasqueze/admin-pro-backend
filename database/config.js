const mongoose = require('mongoose');


const dbConnection =async() => {

    //data BD
    // mongodb+srv://jvelasqueze70:2p271NPIxkRihwmQ@cluster0.gqpscum.mongodb.net/hospitalBD


    try { 
        await mongoose.connect(process.env.DB_CNN, { 
            useNewUrlparser: true,
            useUnifiedTopology: true,
          //  useCreateIndex: true,
           // useFindAndModify: false

    });

console.log('DB Online')

    } catch (error) {
            console.log(error);
            throw new Error('Error a la hora de iniciar la BD ver logs');
    }

}

module.exports = {
    dbConnection

}