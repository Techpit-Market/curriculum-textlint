module.exports = {
  rules: {
    "codeblock-empty-filepath": require("./codeblock-empty-filepath"),
    "codeblock-modify-comment": require("./codeblock-modify-comment"),
    "codeblock-linenum-limit": require("./codeblock-linenum-limit"),
    "codeblock-empty-lang": require("./codeblock-empty-lang"),
    "over-10000words": require("./over-10000words"),
    "do-not-use-h4": require("./do-not-use-h4"),
    "write-end-comment": require("./write-end-comment"),
  },
  rulesConfig: {
    "codeblock-empty-filepath": true,
    "codeblock-modify-comment": true,
    "codeblock-empty-lang": true,
    "codeblock-linenum-limit": true,
    "over-10000words": true,
    "do-not-use-h4": true,
    "write-end-comment": true,
  },
};
