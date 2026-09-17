/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your url?'
        }
    ])
    .then((answers) => {

        console.log('Your url is:', answers.username);

        // Generate QR code
        var qr_png = qr.image(answers.username, { type: 'png' });

        // Save QR code
        qr_png.pipe(fs.createWriteStream('qr_img.png'));

        // Save URL in text file
        fs.writeFile('Username.txt', answers.username, (err) => {
            if (err) throw err;

            console.log('The file has been saved!');
        });

        console.log('QR code generated!');
    })
    .catch((error) => {

        if (error.isTtyError) {
            console.log('Prompt could not be rendered');
        } else {
            console.log('Something went wrong');
        }

    });

