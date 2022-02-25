/**
 * @param {RuleContext} context
 */
module.exports = function(context, options = {}) {
  const { Syntax, RuleError, report, getSource } = context;
  return {
    [Syntax.CodeBlock](node) {
      const text = getSource(node);
      const words = ["追加", "削除", "変更"];

      const invalid = words.some((word) => text.includes(word));
        
      if (!invalid) {
        const ruleError = new RuleError(
          "コードブロックに追加・変更する箇所のコメントアウトがありません。コメントアウトを追加してください。参考：https://techpit-market.gitbook.io/host-guide/4/4-4#4-kdoworikeru", {}
        );
        report(node, ruleError);
      }
    },
  };
}
