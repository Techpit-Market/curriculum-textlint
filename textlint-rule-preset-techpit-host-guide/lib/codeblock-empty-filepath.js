"use strict";

/**
 * コードブロックにファイルのパスが設定されているかチェックする
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
        return;
      }

      if (node.lang.includes("console")) {
        return;
      }

      var isFilePath = string => {
        return string.includes(".");
      };

      var strings = node.lang.split(":");

      if (strings.length === 0) {
        report(node, new RuleError("コードブロックにはファイルのパスを設定してください。"));
        return;
      }

      if (strings.length === 1 && !isFilePath(strings[0])) {
        report(node, new RuleError("コードブロックにはファイルのパスを設定してください。"));
        return;
      }
    }

  };
};
//# sourceMappingURL=codeblock-empty-filepath.js.map