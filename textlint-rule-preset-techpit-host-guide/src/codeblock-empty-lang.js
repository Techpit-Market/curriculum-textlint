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
        return;
      }
      const isFilePath = (string) => {
        return string.includes("/") || string.includes(".");
      };

      const strings = node.lang.split(":");

      if (strings.length === 1 && isFilePath(strings[0])) {
        report(
          node,
          new RuleError("コードブロックにはファイル拡張子を設定してください。")
        );
        return;
      }
    },
  };
};
