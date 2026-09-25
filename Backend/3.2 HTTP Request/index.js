import express from "express";
const app = express();
const port = 300;

app.get("/",(req, res) => {
    res.send("Hello World!");
});

app.get("/contact", (req, res) => {
    res.send("Request received at /contact");
});

app.get("/about", (req, res) => {
    res.send("Request received at /about");
});

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});


