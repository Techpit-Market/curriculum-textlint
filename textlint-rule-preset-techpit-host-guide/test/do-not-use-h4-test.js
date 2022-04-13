"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
// rule
import rule from "../src/do-not-use-h4";
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [
    `
# タイトル
## サブタイトル
### 段落
本文  `.trim(),
  ],
  invalid: [
    {
      text: `
# タイトル
## サブタイトル
### 段落
#### サブ段落
本文  `.trim(),
      errors: [
        {
          message:
            "h4以降のヘッダーを使うことは非推奨としています。参考： https://techpit-market.gitbook.io/host-guide/4/markdown#shiniunohah2toh3dakedeh4toshiteimasu",
          line: 4,
          column: 1,
        },
      ],
    },
  ],
});
