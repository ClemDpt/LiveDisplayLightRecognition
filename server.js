// Import libraries
import { SerialPort } from 'serialport'
import { ReadlineParser } from '@serialport/parser-readline';
import express from 'express';
import bodyParser from 'body-parser';

// Declaration of variables
let globalData = '';

// Server configuration
const app = express()
app.use(express.static("public"));
app.use(bodyParser.json());
app.listen(5501, () => {
  console.log('Server is listening on port 5501');
});

// Port initialization and listening configuration
const port = new SerialPort({ path: 'COM9', baudRate: 9600 }) // SerialPort from your PC (ex: COM9 or /dev/tty.usbserial-A6004byf)
const parser = new ReadlineParser({ delimiter: '\n' });

// Port reading
port.on('open', function(err) {
    console.log('Serial Port open');
    let inputData = '';
    port.on('data', function(data) {
      inputData += data.toString('utf8');
      parser.write(inputData); // Pass the incoming data to the parser
    });
    parser.on('data', function(parsedData) {
      globalData = parsedData; // Update the globalData variable with parsed data
      //console.log(globalData);
    });
    if(err) {
      console.log('Error when trying to open:' + err);
    }
});

// Sending the data to the client
app.get('/getData', (req, res) => {
  res.send(globalData);
})
