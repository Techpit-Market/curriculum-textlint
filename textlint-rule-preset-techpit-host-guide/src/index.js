module.exports = {
  rules: {
    "codeblock-modify-comment": require("./codeblock-modify-comment"),
    "over-1000words": require("./over-10000words"),
  },
  rulesConfig: {
    "codeblock-modify-comment": true,
    "over-1000words": true,
  },
};
