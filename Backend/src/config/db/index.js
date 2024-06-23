const mongoose = require('mongoose');
 async function connect(){
     try {
        await mongoose.connect('mongodb://localhost/db_f8');
        console.log('Connect successfully!');
     } catch (error) {
        console.log('Connect fail!');
     }
}
module.exports = {connect};