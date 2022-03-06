/**
 * コードブロックにファイル拡張子がない場合はエラーを出す
 */
module.exports = function (context) {
  const { Syntax, RuleError, report, getSource } = context;
  return {
    [Syntax.CodeBlock](node) {
      if (node.lang === null) {
        report(
          node,
          new RuleError("コードブロックにはファイル拡張子を設定してください。")
        );
      }
    },
  };
};
