function dbConnect() {

    // const uri = `mongodb+srv://${process.env.DB_PARTS}:${process.env.DB_PASS}@cluster0.8cczehf.mongodb.net/?retryWrites=true&w=majority`;
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    console.log("db connected");
}
module.exports = dbConnect