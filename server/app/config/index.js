module.exports = {
    secret: 'secret',
    session: {
        session: false
    },

    database: 'mongodb://'+process.env.MONGO_CONTAINER_NAME+':'+process.env.MONGO_EXT_PORT+'/mevn-stack'
};