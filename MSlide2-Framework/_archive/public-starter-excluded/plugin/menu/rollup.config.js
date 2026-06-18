import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { DEFAULT_EXTENSIONS } from '@babel/core'
// import { terser } from 'rollup-plugin-terser'

export default {
  input: 'plugin.js',
  output: [
    {
      name: 'RevealMenu',
      file: 'menu.esm.js',
      format: 'esm',
    },
    {
      name: 'RevealMenu',
      file: 'menu.js',
      format: 'umd',
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime', 
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: '3.15.2',
            targets: {
              edge: '17',
              firefox: '60',
              chrome: '67',
              safari: '11.1',
              ie: '10',
            },
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-transform-runtime'],
      ],
    }),
    // terser(),
  ],
}
