"use strict";
import TextLintTester from "textlint-tester";

const tester = new TextLintTester();
// rule
import rule from "../src/over-10000words";
import { WORDS_23481, WORDS_601 } from "./over-10000words-test-fixture";
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [WORDS_601.trim()],
  invalid: [
    {
      text: WORDS_23481.trim(),
      errors: [
        {
          message:
            "1パートの文字数が23481字あります。1パート10000字程度になるように適切にパート分割をお願いいたします。参考：https://techpit-market.gitbook.io/host-guide/4/4-10#2-1pjinogai",
          line: 1,
          column: 1,
        },
      ],
    },
  ],
});
