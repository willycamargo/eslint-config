# Eslint Config
Eslint config for personal projects

## 1. Using

### 1.1. Install the library
```shell
npm install @willycamargo/eslint-config
```

### 1.2. Setup config by enviroment

#### NodeJS
##### Add file `.eslintrc.json`
```json
{
  "extends": [
    "@willycamargo/eslint-config"
  ],
  "env": {
    "node": true
  }
}
```

#### Vanilla JS
##### Add file `.eslintrc.json`
```json
{
  "extends": [
    "@willycamargo/eslint-config"
  ],
  "env": {
    "browser": true
  }
}
```

#### React JS (with create-react-app + import resolver)
##### Install babel-plugin-module-resolver
```shell
npm install --save-dev babel-plugin-module-resolver
```

##### Add file `.eslintrc.json`
```json
{
  "extends": ["@willycamargo/eslint-config/react"],
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "plugins": ["react", "react-hooks"],
  "settings": {
    "import/resolver": {
      "babel-module": {
        "root": ["./src/"]
      }
    }
  }
}
```