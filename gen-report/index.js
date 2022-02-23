const fs = require("fs");
const path = require("path");
const TextLintEngine = require("textlint").TextLintEngine;

const engine = new TextLintEngine({
  configFile: ".textlintrc",
});
const pug = require("pug");

engine.executeOnFiles(["../curriculum/*/*.md"]).then((results) => {
  if (engine.isErrorResults(results)) {
    results = results.map((result) => {
      return {
        fileName: path.basename(result.filePath),
        ...result,
      };
    });
    const files = results
      .map((result) => {
        return {
          fileName: path.basename(result.filePath),
          lines: fs.readFileSync(result.filePath).toString().split("\n"),
        };
      })
      .reduce((p, c) => {
        p[c.fileName] = c;
        return p;
      }, {});

    fs.writeFileSync(
      "../textlint-report.html",
      pug.renderFile(path.resolve(__dirname, "template.pug"), {
        results,
        files,
      })
    );
    console.log(`レポートを出力しました。${path.resolve("../textlint-report.html")}`);
  } else {
    console.log("指摘箇所が存在しない為レポートは出力しません。");
  }
});
