const fs = require('fs');

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