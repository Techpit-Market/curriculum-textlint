"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
// rule
import rule from "../src/write-end-comment";
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [
    `
# タイトル
本文1
本文2`.trim(),
  ],
  invalid: [
    {
      text: `
# タイトル
本文1
\`\`\`
    aaaa
\`\`\``.trim(),
      errors: [
        {
          message:
            "パートの最後が文章ではありません。各パートの最後には簡単なコメントや一言を入れてください。参考： https://techpit-market.gitbook.io/host-guide/4/4-3#ptonono",
          line: 1,
          column: 1,
        },
      ],
    },
  ],
});
