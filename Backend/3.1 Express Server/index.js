import express from "express";
const app = express();
const port = 300;
app.get("/", (req, res) =>{
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(req);
});