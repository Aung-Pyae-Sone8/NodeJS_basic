const fs = require('fs');   // import file system library from node js



if (!fs.existsSync('./docs/content.txt')) {
    // write 
    fs.writeFile('./docs/content.txt', "hi there", (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file created');
    })

    // read 
    fs.readFile('./docs/content.txt', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data.toString());
    });
    
} else {
    // delete 
    fs.unlink('./docs/content.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}

if (fs.existsSync('./new-folder')) {
    // folder delete 
    fs.rmdir('./new-folder', (err) => {
        if (err) {
            console.log(err);
        }

        console.log('folder deleted');
    })
} else {
    // folder create 
    fs.mkdir('./new-folder', (err) => {
        if (err) {
            console.log(err)
        }

        console.log('folder created');
    })
}







