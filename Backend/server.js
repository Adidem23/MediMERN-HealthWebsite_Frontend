const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const PORT = 4135;
const cors = require('cors');
const mongoose = require('mongoose');
const usermodel = require('./Models/UserModel');

app.use(BodyParser.urlencoded({ extended: true }));

const uri = "mongodb+srv://adityasuryawanshi1310:LK9RXBMOokQfAUDo@adicluster.e0f4mbs.mongodb.net/"

mongoose.connect(uri).then(() => {
    console.log("MongoDb Connected");
}).catch((err) => {
    console.log(err)
})

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("<h1>Hello!!Atlassian</h1>")
});

app.post("/registerUser", async (req, res) => {
    const Name = req.body.UserName;
    const Password = req.body.UserPassword;
    const Email = req.body.Email;

    console.log(Name, Password, Email)

    const user = await usermodel.create({ Name: Name,email:Email,password:Password});

    console.log("New User Joined: " + user);

    res.status(200).send("OK")

})

app.get("/getUsers", async (req, res) => {

})


app.listen(PORT, () => {
    console.log(`Listening On Port ${PORT}`);
})