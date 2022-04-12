module.exports = {
  rules: {
    "codeblock-modify-comment": require("./codeblock-modify-comment"),
    "over-1000words": require("./over-10000words"),
    "do-not-use-h4": require("./do-not-use-h4"),
    "write-end-comment": require("./write-end-comment"),
  },
  rulesConfig: {
    "codeblock-modify-comment": true,
    "over-1000words": true,
    "do-not-use-h4": true,
    "write-end-comment": true,
  },
};
