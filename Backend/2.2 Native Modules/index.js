const fs = require("fs");

writeFile("message.txt","Hello from Rushikesh", (err) => {
    if (err) throw err;
    console.log("File has been created successfully");
});

