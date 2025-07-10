const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');

(async () => {
	await imagemin(['/*.png'], {
		destination: '/images',
		plugins: [
			imageminOptipng()
		]
	});

	console.log('Images optimized!');
})();
