module.exports = {
  rules: {
    "codeblock-modify-comment": require("./codeblock-modify-comment"),
    "codeblock-linenum-limit": require("./codeblock-linenum-limit")
  },
  rulesConfig: {
    "codeblock-modify-comment": true,
    "codeblock-linenum-limit": {
      limitLineNum: 10
    }
  },
};
