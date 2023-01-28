import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
import postcss from "rollup-plugin-postcss"
import { uglify } from "rollup-plugin-uglify"
import { babel } from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"

export default {
  input: "./index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    typescript(),
    postcss({
      extensions: [".css"],
    }),
    uglify(),
    babel({
      babelrc: true,
      presets: ["@babel/preset-react"],
      exclude: "node_modules/**",
    }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: "auto",
    }),
  ],
}
