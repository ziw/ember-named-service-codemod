const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');
const dasherize = require('./utils/dasherize');

module.exports = function transformer(file, api) {
  const EMBER_SERVICE_IMPORT_PATH = '@ember/service';
  const j = getParser(api);
  const options = getOptions();
  const root = j(file.source);

  //if inject was aliased into other name, i.e { inject as service }
  let injectAlias = undefined;

  root
    .find(j.ImportDeclaration, { source: { value: EMBER_SERVICE_IMPORT_PATH } })
    .forEach((path) => {
      const injectSpecifier = path.node.specifiers.find(
        (s) => s.imported && s.imported.name === 'inject'
      );
      if (injectSpecifier) {
        injectAlias = injectSpecifier.local.name;
      }
    });

  if (injectAlias) {
    root.find(j.ClassProperty).forEach((path) => {
      path.node.decorators = (path.node.decorators || []).map((decorator) => {
        //only modify @inject or @service decorators
        if (
          decorator.expression.type === 'Identifier' &&
          decorator.expression.name === injectAlias
        ) {
          decorator.expression = j.callExpression(j.identifier(injectAlias), [
            j.stringLiteral(dasherize(path.node.key.name)),
          ]);
        }

        return decorator;
      });
    });
  }
  const quote = options.doubleQuote ? 'double' : 'single';
  return root.toSource({ quote });
};

module.exports.type = 'js';
