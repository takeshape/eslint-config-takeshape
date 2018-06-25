# eslint-config-takeshape 

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)
  for the [TakeShape](http://www.takeshape.io) code style. This script
  builds on the [XO](https://github.com/sindresorhus/xo) shareable config with
  small changes and additions.


## Install

```
$ npm install --save-dev eslint eslint-config-takeshape
```


## Usage

Add the appropriate ESLint config to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint"
  },
  "devDependencies": {
    "eslint": "^2.9.0",
    "eslint-config-takeshape": "^1.0.0"
  },
  "eslintConfig": {
    "extends": "takeshape"
  }
}
```

Lint with

```sh
$ npm run lint
```
