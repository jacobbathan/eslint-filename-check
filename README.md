install
`npm i https://github.com/jacobbathan/eslint-filename-check`

add to `.eslint`config

```
 plugins: ["filename-check"],
  rules: {
    "filename-check/jsx-casing": 2,
    "filename-check/css-casing": 2,
    "filename-check/javascript-casing": 2,
  },
```
