"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
// rule
import rule from "../src/codeblock-empty-filepath";
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [
    // no problem
    `
\`\`\`js:hoge.js
    aaaa
\`\`\`
        `.trim(),
    `
\`\`\`console
    aaaa
\`\`\`
        `.trim(),
  ],
  invalid: [
    {
      text: `
\`\`\`js
    aaaa
\`\`\`
                `.trim(),
      errors: [
        {
          message: "コードブロックにはファイルのパスを設定してください。",
          line: 1,
          column: 1,
        },
      ],
    },
    {
      text: `
    \`\`\`go-qr-code/
        aaaa // ここを変更する
    \`\`\`
            `.trim(),
      errors: [
        {
          message: "コードブロックにはファイルのパスを設定してください。",
          line: 1,
          column: 1,
        },
      ],
    },
  ],
});
