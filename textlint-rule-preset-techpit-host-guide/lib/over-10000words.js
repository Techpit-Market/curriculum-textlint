"use strict";

/**1パートがおおよそ1万字以内に収まっているかチェック
 * 10001字など、厳密に引っ掛ける必要はないので閾値は12000字にする
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
    [Syntax.Document](node) {
      var text = getSource(node);
      var THRESHOLD = 12000;
      var invalid = text.length > THRESHOLD;

      if (invalid) {
        var ruleError = new RuleError("1\u30D1\u30FC\u30C8\u306E\u6587\u5B57\u6570\u304C".concat(text.length, "\u5B57\u3042\u308A\u307E\u3059\u30021\u30D1\u30FC\u30C810000\u5B57\u7A0B\u5EA6\u306B\u306A\u308B\u3088\u3046\u306B\u9069\u5207\u306B\u30D1\u30FC\u30C8\u5206\u5272\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002\u53C2\u8003\uFF1Ahttps://techpit-market.gitbook.io/host-guide/4/4-10#2-1pjinogai"), {});
        report(node, ruleError);
      }
    }

  };
};
//# sourceMappingURL=over-10000words.js.map