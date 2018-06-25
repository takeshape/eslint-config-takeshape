'use strict';

module.exports = {
  extends: [
    'xo/esnext',
    'xo-react/space',
    'plugin:import/errors',
    'plugin:import/react'
  ],
  plugins: ['filenames'],
  rules: {
    indent: [2, 2, {SwitchCase: 1}],
    'quote-props': 0,
    'dot-notation': 0,
    'guard-for-in': 0,
    'filenames/match-regex': [2, '^[a-z0-9\\-\\.]+$'],
    'babel/new-cap': 0,
    'no-constant-condition': 0
  },
  env: {
    browser: true
  }
};
