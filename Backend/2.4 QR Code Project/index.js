/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your name?'
        }
    ])
    .then((answers) => {
        console.log('Your name is:', answers.username);
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log('Prompt could not be rendered');
        } else {
            console.log('Something went wrong');
        }
    });

import qr from 'qr-image';

var qr_svg = qr.image(answers.username, { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.png'));
var svg_string = qr.imageSync(answers.username, { type: 'svg' });

import fs from 'fs';
fs.writeFile("Username.txt", answers.username, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

console.log