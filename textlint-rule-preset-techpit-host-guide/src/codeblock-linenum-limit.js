/**
 * ソースコードの行数がn行以上の場合ワーニングを出す
 * @param {RuleContext} context
 */
module.exports = function (context, options) {
  const { Syntax, RuleError, report } = context;
  return {
    [Syntax.CodeBlock](node) {
      const limitLineNum = 15;

      const text = node.value
      const lineNum = text.split("\n").length;

      if (lineNum > limitLineNum) {
        report(
          node,
          new RuleError(
            `コードブロック内のコードの長さは${limitLineNum}行以内に収めてください。\nコードブロックを分割したり省略などを使って行以内に収めれないかご検討お願いします。`,
            {
              line: limitLineNum,
            }
          )
        );
        return;
      }
    },
  };
};
