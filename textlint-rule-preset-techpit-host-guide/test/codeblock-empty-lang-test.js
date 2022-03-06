"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
// rule
import rule from "../src/codeblock-empty-lang";
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [
    // no problem
    `
\`\`\`js
    aaaa
\`\`\`
        `.trim(),
  ],
  invalid: [
    {
      text: `
\`\`\`
    aaaa
\`\`\`
                `.trim(),
      errors: [
        {
          message:
            "コードブロックにはファイル拡張子を設定してください。",
          line: 1,
          column: 1,
        },
      ],
    },
  ],
});
