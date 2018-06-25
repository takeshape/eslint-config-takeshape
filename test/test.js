import test from 'ava';
import isPlainObj from 'is-plain-obj';
import eslint from 'eslint';
import tempWrite from 'temp-write';

function runEslint(str, conf) {
  const linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

function hasRule(errors, ruleId) {
  return errors.some(x => x.ruleId === ruleId);
}

test('browser', t => {
  const conf = require('../browser');
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('class Foo {}\n', conf);
  t.is(errors[0].ruleId, 'no-unused-vars');
});

test('node', t => {
  const conf = require('../node');
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('class Foo {}\n', conf);
  t.is(errors[0].ruleId, 'no-unused-vars');
});

test('react', t => {
  const conf = require('../react');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.rules));

  const errors = runEslint('<App>\n\t<Hello/>\n</App>', conf);
  t.true(hasRule(errors, 'react/jsx-indent'));
});

