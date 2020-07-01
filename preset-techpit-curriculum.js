const path = require('path');

const { moduleInterop } = require('@textlint/module-interop');

const presetJTW = moduleInterop(require('textlint-rule-preset-ja-technical-writing'));

module.exports = {
  rules: {
    ...presetJTW.rules,
    'prh': moduleInterop(require('textlint-rule-prh')),
    'spellcheck-tech-word': moduleInterop(require('textlint-rule-spellcheck-tech-word')),
  },
  rulesConfig: {
    ...presetJTW.rulesConfig,
    'prh': {
      rulePaths: [path.join(__dirname, 'prh-rules.yml')]
    },
    'spellcheck-tech-word': true,
  },
};
