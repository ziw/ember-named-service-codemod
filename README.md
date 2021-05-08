# ember-named-service-codemod

A codemod to transform your service injection to include service name argument.

## Usage

To run a specific codemod from this project, you would run the following:

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

## Transforms

<!--TRANSFORMS_START-->
* [named-service-injection](transforms/named-service-injection/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`