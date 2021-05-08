# ember-named-service-codemod

[![CI](https://github.com/ziw/ember-named-service-codemod/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ziw/ember-named-service-codemod/actions/workflows/ci.yml)

A codemod to transform your service injection to include service name argument.

Before `@inject myService`
After `@inject('my-service') myService`
Also supports the case when your `inject` import is aliased to another name (`import { inject as service } from '@ember/service'`)

The service name argument is not required by Ember. This transform is solely for the purpose of more explicit and consistent service injection pattern.

## Usage

To run this codemod, you would run the following:

```
npx ember-named-service-codemod named-service-injection path/of/files/ or/some**/*glob.js

# or

yarn global add ember-named-service-codemod
ember-named-service-codemod named-service-injection path/of/files/ or/some**/*glob.js
```

## Local Usage

```
node ./bin/cli.js named-service-injection path/of/files/ or/some**/*glob.js
```

## Options

| Option           | Value   | Default | Details                                                                  |
| ---------------- | ------- | ------- | ------------------------------------------------------------------------ |
| `--double-quote` | boolean | `false` | If the output string arg should use double quote `@inject("my-service")` |

## Transforms

<!--TRANSFORMS_START-->

- [named-service-injection](transforms/named-service-injection/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

- clone the repo
- change into the repo directory
- `yarn`

### Running tests

- `yarn test`

### Update Documentation

- `yarn update-docs`
