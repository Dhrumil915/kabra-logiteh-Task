const mongoose = require('mongoose')
const express = require('express');
const app = express();
const port = 3001;
const productRoutes = require("./routes/ProductRoutes.js");

app.use(express.json());

//DB CONNECTIONS
mongoose
    .connect("mongodb+srv://bunny1996:bunny1996@cluster0.bpqp2.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() => {
        console.log("DB CONNECTED");
    }).catch(() => {
        console.log("ERROR");
    })

// MY ROUTES
app.use("/api", productRoutes);

app.listen(port, () => {
    console.log(`app is running on ${port}`);
});

