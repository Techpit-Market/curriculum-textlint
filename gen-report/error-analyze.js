const fs = require("fs");
const path = require("path");
const TextLintEngine = require("textlint").TextLintEngine;

const engine = new TextLintEngine({
  configFile: "./curriculum-textlint/.textlintrc",
});

const chapter = process.argv[2];

(async () => {
  const results = await engine.executeOnFiles([
    `./curriculum/${chapter}*/*.md`,
  ]);

  const report = {};

  results.forEach(({ messages, filePath }) => {
    messages.forEach((message) => {
      if (report[message.ruleId] === undefined) {
        report[message.ruleId] = 0;
      }

      report[message.ruleId]++;
    });
  });

  console.log(report);
})();
