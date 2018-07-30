module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(config.database, {
        useNewUrlParser: true,
        promiseLibrary: global.Promise
    });

    database.on('error', error => console.log(`Connection to mevn-stack database failed: ${error}.`));
    database.on('connected', () => console.log('Connected to mevn-stack database.'));
    database.on('disconnected', () => console.log('Disconnected from mevn-stack database.'));

    process.on('SIGINT', () => {
        database.close(() => {
            console.log('MEVN Stack terminated, connection closed.');
            process.exit(0);
        })
    });
};