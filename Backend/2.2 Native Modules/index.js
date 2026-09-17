const fs = require("fs");

fs.writeFile("message.txt","Hello from Rushikesh", (err) => {
    if (err) throw err;
    console.log("File has been created successfully");
});

fs.readFile('message.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});