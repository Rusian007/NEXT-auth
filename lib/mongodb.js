const mongoose = require("mongoose");
const uri = "mongodb+srv://rusian:hellsheart@survaycluster.nowszxv.mongodb.net/?retryWrites=true&w=majority";
module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true

        };
        await mongoose.connect(uri, connectionParams);
        console.log("connected to database.");
    } catch (error) {
        console.log("could not connect to database", error);
    }
};
