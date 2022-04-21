module.exports = {
  rules: {
    "codeblock-modify-comment": require("./codeblock-modify-comment"),
    "codeblock-empty-lang": require("./codeblock-empty-lang"),
    "over-1000words": require("./over-10000words"),
    "do-not-use-h4": require("./do-not-use-h4"),
    "write-end-comment": require("./write-end-comment"),
  },
  rulesConfig: {
    "codeblock-modify-comment": true,
    "codeblock-empty-lang": true,
    "over-1000words": true,
    "do-not-use-h4": true,
    "write-end-comment": true,
  },
};
