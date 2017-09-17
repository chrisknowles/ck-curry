import babel from 'rollup-plugin-babel';

export default {
  input: 'src/curry.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/curry.js',
      name: 'curry',
      format: 'umd'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
