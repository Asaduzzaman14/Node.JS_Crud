const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');


app.use(cors())
app.use(express.json());
const port = process.env.PORT || 4000


app.use("/user", userRoutes)





app.use("/", (req, res) => {
    res.send("node js is worked")
})

app.listen(port, () => {
    console.log("crud app is run");

});

// process.on("unhandledRejection", (error) => {
//     console.log(error.name, error.message);
//     app.close(() => {
//         process.exit(1);
//     });
// });