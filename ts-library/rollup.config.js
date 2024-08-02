import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'dist/index.js',
	output: [
		{
			file: 'dist/bundle.cjs.js',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/bundle.esm.js',
			format: 'es',
			sourcemap: true,
		},
	],
	plugins: [
		nodeResolve(),
		commonjs(),
		typescript({
			tsconfig: './tsconfig.json',
		}),
	],
};
