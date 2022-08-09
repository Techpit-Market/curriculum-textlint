"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
// rule
import rule from "../src/codeblock-modify-comment";
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [
    // no problem
    `
\`\`\`
    /* ここから追加する */
    aaaa
    /* ここまで追加する */
\`\`\`
        `.trim(),
    `
\`\`\`
    aaaa // ここを変更する
\`\`\`
        `.trim(),
    `
\`\`\`
    /* ここから削除する */
    aaaa
    /* ここまで削除する */
\`\`\`
            `.trim(),
    `
\`\`\`
    /* ここから編集する */
    aaaa
    /* ここまで編集する */
\`\`\`
            `.trim(),
    `
\`\`\`console
    aaaa
\`\`\`
            `.trim(),
    `
\`\`\`diff
    aaaa
\`\`\`
            `.trim(),
    `
\`\`\`解説
    aaaa
\`\`\`
            `.trim(),
`
\`\`\`go:解説
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
            "コードブロックに追加・変更する箇所のコメントアウトがありません。コメントアウトを追加してください。参考：https://techpit-market.gitbook.io/host-guide/4/4-4#4-kdoworikeru",
          line: 1,
          column: 1,
        },
      ],
    },
  ],
});
