/**
 * コードブロックにファイルのパスが設定されているかチェックする
 */
module.exports = function (context) {
  const { Syntax, RuleError, report, getSource } = context;
  return {
    [Syntax.CodeBlock](node) {
      if (node.lang === null) {        
        return;
      }

      if (node.lang.includes("console")) {
        return;
      }

      const isFilePath = (string) => {
        return string.includes("/") || string.includes(".");
      };

      const strings = node.lang.split(":");

      if (strings.length === 1 && !isFilePath(strings[0])) {
        report(
          node,
          new RuleError(
            "コードブロックにはファイルのパスを設定してください。"
          )
        );
        return;
      }
    },
  };
};
