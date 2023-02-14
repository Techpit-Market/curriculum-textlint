/**
 * ソースコードの行数がn行以上の場合ワーニングを出す
 * コードブロックに`skiplint`を指定するとスキップ
 * 例↓
 * ```yml:docker-compose.yml skiplint
 * {{コード}}
 * ```
 * @param {RuleContext} context
 */
module.exports = function (context, options) {
  const { Syntax, RuleError, report } = context;
  return {
    [Syntax.CodeBlock](node) {
      const limitLineNum = 15;
      const excludedLangs = ["skiplint"];
      const text = node.value
      const lineNum = text.split("\n").length;

      const invalid = excludedLangs.some((lang) => node.lang !== null && node.lang.includes(lang));

      if (!invalid && lineNum > limitLineNum) {
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
