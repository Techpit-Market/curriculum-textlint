"use strict";

/**
 * ソースコードに 「// ここから追加 」などのコメントが入っているかチェック
 * diffやconsoleの場合は例外
 * @param {RuleContext} context
 */
module.exports = function (context) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var {
    Syntax,
    RuleError,
    report,
    getSource
  } = context;
  return {
    [Syntax.CodeBlock](node) {
      var text = getSource(node);
      var words = ["追加", "削除", "変更", "編集"];
      var excludedLangs = ["diff", "console"];
      var invalid = words.some(word => text.includes(word)) || excludedLangs.some(lang => node.lang !== null && node.lang.includes(lang));

      if (!invalid) {
        var ruleError = new RuleError("コードブロックに追加・変更する箇所のコメントアウトがありません。コメントアウトを追加してください。参考：https://techpit-market.gitbook.io/host-guide/4/4-4#4-kdoworikeru", {});
        report(node, ruleError);
      }
    }

  };
};
//# sourceMappingURL=codeblock-modify-comment.js.map