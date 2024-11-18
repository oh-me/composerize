import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import replace from '@rollup/plugin-replace';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import json from '@rollup/plugin-json';

export default {
    input: 'src/index.js',
    plugins: [
        babel({
            include: ['src/**/*.js', 'node_modules/camelcase/**/*.js'],
			babelHelpers: 'bundled',
        }),
        json(),
        commonjs(),
        globals(),
        builtins(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
			preventAssignment: false,
        }),
        resolve(),
        uglify(),
    ],
    output: {
        name: 'composerize',
        sourcemap: 'inline',
        file: 'dist/composerize.js',
        format: 'umd',
    },
};
