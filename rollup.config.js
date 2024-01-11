const typescript = require("rollup-plugin-typescript2");
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const libraryName = 'cheerio'

module.exports = {
  input: "src/index.ts",
  output: [
    { format: "es", file: 'lib/cheerio.esm.js' },
    { format: "umd", file: 'lib/cheerio.umd.js', name: libraryName },
  ],
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
      useTsconfigDeclarationDir: true
    }),
    resolve(),
    commonjs(),
  ],
};