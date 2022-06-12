"use strict";

/**
 * コードブロックにファイル拡張子がない場合はエラーを出す
 */
module.exports = function (context) {
  var {
    Syntax,
    RuleError,
    report,
    getSource
  } = context;
  return {
    [Syntax.CodeBlock](node) {
      if (node.lang === null) {
        report(node, new RuleError("コードブロックにはファイル拡張子を設定してください。"));
        return;
      }

      var isFilePath = string => {
        return string.includes("/") || string.includes(".");
      };

      var strings = node.lang.split(":");

      if (strings.length === 1 && isFilePath(strings[0])) {
        report(node, new RuleError("コードブロックにはファイル拡張子を設定してください。"));
        return;
      }
    }

  };
};
//# sourceMappingURL=codeblock-empty-lang.js.map