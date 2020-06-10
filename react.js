module.exports = {
  "extends": ["eslint-config-airbnb", "./index.js", "eslint-config-prettier/react"],
  "rules": {
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "react/button-has-type": 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": [
      "error",
      {
        "allowChildren": true
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "specialLink": ["to"]
      }
    ],
    "react/jsx-props-no-spreading": 0,
  }
};