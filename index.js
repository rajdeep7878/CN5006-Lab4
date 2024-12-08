const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get("/studentinfo", (req, res) => {
    res.sendFile("StudentInfo.html", { root: __dirname });
});

// Handle form submission
app.post("/submit-data", (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const ageGender = req.body.myAge + " Gender: " + req.body.gender;
    const qualifications = req.body.Qual;

    res.json({
        status: true,
        message: "Form Details",
        data: {
            name: name,
            age: ageGender,
            Qualification: qualifications,
        },
    });
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
