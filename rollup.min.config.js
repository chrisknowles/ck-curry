import babel from 'rollup-plugin-babel';
import butternut from 'rollup-plugin-butternut';

export default {
  input: 'src/curry.js',
  output: [
    {
      file: 'dist/curry.min.js',
      name: 'curry',
      format: 'umd',
      sourcemap: true
    }
  ],
  plugins: [
    butternut(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
