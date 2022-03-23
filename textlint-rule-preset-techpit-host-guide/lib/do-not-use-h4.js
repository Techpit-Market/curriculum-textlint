"use strict";

/**
 * h4以降を使用していないかチェック
 * @param {RuleContext} context
 */
module.exports = function (context) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var {
    Syntax,
    RuleError,
    report
  } = context;
  return {
    [Syntax.Header](node) {
      if (node.depth >= 4) {
        var ruleError = new RuleError("h4以降のヘッダーを使うことは非推奨としています。参考： https://techpit-market.gitbook.io/host-guide/4/markdown#shiniunohah2toh3dakedeh4toshiteimasu", {});
        report(node, ruleError);
      }
    }

  };
};
//# sourceMappingURL=do-not-use-h4.js.map