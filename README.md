# @yandeu/eslint-config

```console
npm i -D @yandeu/eslint-config
```

```json
// .eslintrc
{
  "extends": "@yandeu/eslint-config"
}
```

```json
// package.json
"scripts": {
  "lint": "eslint src --ext .ts,.tsx",
  "lint:fix": "eslint --fix src --ext .ts,.tsx"
}
```

## Configuration

```json
// .eslintrc
{
  "extends": "@yandeu/eslint-config",
  "rules": {
    "my-eslint-rule": "error"
  }
}
```

## TypeScript

Using TypeScript? Maybe you also want to add the rules below:

```json
{
  // no-dupe-class-members ts fix
  "no-dupe-class-members": "off",
  "@typescript-eslint/no-dupe-class-members": ["error"],

  // no-redeclare ts fix
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": ["error"]
}
```

## GitHub Actions

```yml
- name: Run ESLint
  run: npm run lint
```

## Integrating with Prettier

Install [@yandeu/prettier-config](https://github.com/yandeu/prettier-config).

## VSCode

Using VSCode? Install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## License

[MIT](https://github.com/yandeu/eslint-config/blob/main/LICENSE)
