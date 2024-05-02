const fs = require('fs');


// read stream 
const readStream = fs.createReadStream('./docs/large.txt'); 

// write stream 
const writeStream = fs.createWriteStream('./docs/large-write.txt');
const writePipeStream = fs.createWriteStream('./docs/pipe-write.txt');

// readstream 'on' method
readStream.on('data',function(data) {
    writeStream.write(data.toString())
    writeStream.write('---chunk---')
})

// pipe method 
readStream.pipe(writePipeStream);



