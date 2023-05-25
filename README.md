# Live display of light captors and letter recognition
The project aims to display data from a 3x3 light captor array connected to an Ardiuno Uno on a website in a graphical way and analyze the data, displaying the result of the analysis on the same web site.

## Installation
To install the project:
1. Clone the repository from GitHub.
2. Change the Serial port name and rate and the server port in the server.js file. You may also need to change the line delimiter.
3. Launch the server by typing "node server.js" in the terminal.
4. Open the web page : http://localhost:[SERVER_PORT]

## Usage
Once the project is installed, you can use it to display data from the captor on the website. The server will connect to the captor and retrieve the data, which will be displayed in a graphical format on the website. The display.js file can be used to calibrate and analyze the data.

## License
The project is licensed under the MIT license.
