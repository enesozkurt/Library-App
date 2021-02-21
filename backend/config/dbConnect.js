const mongoose = require('mongoose');

const dbConnect = () => {
// connect DB
    mongoose.connect('mongodb+srv://<username>:<password>@cluster0.ujgnn.mongodb.net/<project>', {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    }).then(() => console.log('DB Connected')).catch(err => console.log(err));
}

module.exports = dbConnect;
