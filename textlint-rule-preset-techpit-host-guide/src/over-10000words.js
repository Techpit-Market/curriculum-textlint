/**1パートがおおよそ1万字以内に収まっているかチェック
 * 10001字など、厳密に引っ掛ける必要はないので閾値は12000字にする
 * @param {RuleContext} context
 */
module.exports = function (context, options = {}) {
  const { Syntax, RuleError, report, getSource } = context;
  return {
    [Syntax.Document](node) {
      const text = getSource(node);
      const THRESHOLD = 12000;

      const invalid = text.length > THRESHOLD;

      if (invalid) {
        const ruleError = new RuleError(
          `1パートの文字数が${text.length}字あります。1パート10000字程度になるように適切にパート分割をお願いいたします。参考：https://techpit-market.gitbook.io/host-guide/4/4-10#2-1pjinogai`,
          {}
        );
        report(node, ruleError);
      }
    },
  };
};
