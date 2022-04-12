/**
 * パートの最後が文章で終わっているかチェック
 * @param {RuleContext} context
 */
module.exports = function (context, options = {}) {
  const { Syntax, RuleError, report } = context;
  return {
    [Syntax.Document](node) {
      const lastNode = node.children.slice(-1)[0];
      if (lastNode.type !== "Paragraph") {
        const ruleError = new RuleError(
          "パートの最後が文章ではありません。各パートの最後には簡単なコメントや一言を入れてください。参考： https://techpit-market.gitbook.io/host-guide/4/4-3#ptonono",
          {}
        );
        report(node, ruleError);
      }
    },
  };
};
