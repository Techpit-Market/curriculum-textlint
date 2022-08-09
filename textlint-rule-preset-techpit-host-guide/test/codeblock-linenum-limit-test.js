"use strict";
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();
// rule
import rule from "../src/codeblock-linenum-limit";
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [
    // no problem
    `
\`\`\`
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11
    12
    13
    14
    15
\`\`\`
        `.trim(),
    `
\`\`\`
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
\`\`\`
        `.trim(),
  ],
  invalid: [
    {
      text: `
      \`\`\`
          1
          2
          3
          4
          5
          6
          7
          8
          9
          10
          11
          12
          13
          14
          15
          16
      \`\`\`
              `.trim(),
      errors: [
        {
          message:
            "コードブロック内のコードの長さは15行以内に収めてください。\nコードブロックを分割したり省略などを使って行以内に収めれないかご検討お願いします。",
          line: 16,
          column: 1,
        },
      ],
    },
  ],
});
