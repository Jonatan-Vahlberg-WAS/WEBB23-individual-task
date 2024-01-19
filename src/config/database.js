var mongoose = require('mongoose');
const localURI =  process.env.MONGODB_DEVELOPMENT_URI;
const stagingURI = process.env.MONGODB_STAGING_URI

async function connectToDB() {
    let url = stagingURI;
    if(process.env.NODE_ENV === 'development') {
        url = localURI;
    }
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    var db = mongoose.connection;
    db.on('error', () => console.log('Error connecting to DB'));

    db.once('open', function () {
        console.log(`Connected to ${url}`);
        console.log(`Environment: ${process.env.NODE_ENV}`);
    });
}

module.exports = connectToDB;