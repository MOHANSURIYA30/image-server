
module.exports = {
    mongoConf: {
        conString: process.env.MONGODB,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
}