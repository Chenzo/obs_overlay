
//import { terser } from "rollup-plugin-terser";
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

export default [
	{
		input: 'src/js/main.js',
		output: {
			name: 'mainPackage',
			file: 'www/js/main.min.js',
			format: 'umd',
			sourcemap: true
		},
		plugins: [
			//uglify() //Can't handle ES6 classes
			//terser() ,
			livereload(),
			serve({
				open: true,
				contentBase: 'www/',
				host: 'localhost',
  				port: 10001,
			})
		]
		
	},
	
];