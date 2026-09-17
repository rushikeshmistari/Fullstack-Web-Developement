const fs = require("fs");

fs.writeFile("message.txt","Hello from Rushikesh", (err) => {
    if (err) throw err;
    console.log("File has been created successfully");
});

fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});