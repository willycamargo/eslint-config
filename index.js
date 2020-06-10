module.exports = {
  "extends": ["eslint-config-airbnb", "eslint-config-prettier"],
  "rules": {
    "operator-linebreak": [2, "after"],
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "semi": ["error", "never"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true, "avoidEscape": true }],
    "max-len": [
      "error",
      {
        "code": 100,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "import/no-unresolved": [
      "error",
      {
        "commonjs": true,
        "amd": true
      }
    ]
  }
}
