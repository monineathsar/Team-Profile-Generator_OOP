const fs = require('fs');

// will generate the HTML file inside 'dist' folder with title 'index.html'
const writeFile = (data) => {
	fs.writeFile('./dist/index.html', data, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Your team profile html was generated successfully!');
		}
	});
};

module.exports = writeFile;