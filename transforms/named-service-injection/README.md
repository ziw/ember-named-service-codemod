# named-service-injection


## Usage

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

## Input / Output

<!--FIXTURES_TOC_START-->
* [doubleQuote](#doubleQuote)
* [inject](#inject)
* [injectAsAlias](#injectAsAlias)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="doubleQuote">**doubleQuote**</a>

**Input** (<small>[doubleQuote.input.js](transforms/named-service-injection/__testfixtures__/doubleQuote.input.js)</small>):
```js
import { inject } from "@ember/service";

export default class HelloWorld extends Component {
  @inject
  userAuthentication;

  @inject github;
}

```

**Output** (<small>[doubleQuote.output.js](transforms/named-service-injection/__testfixtures__/doubleQuote.output.js)</small>):
```js
import { inject } from "@ember/service";

export default class HelloWorld extends Component {
  @inject("user-authentication")
  userAuthentication;

  @inject("github") github;
}

```
---
<a id="inject">**inject**</a>

**Input** (<small>[inject.input.js](transforms/named-service-injection/__testfixtures__/inject.input.js)</small>):
```js
import { inject } from '@ember/service';

export default class HelloWorld extends Component {
  @inject
  userAuthentication;

  @inject github;
}

```

**Output** (<small>[inject.output.js](transforms/named-service-injection/__testfixtures__/inject.output.js)</small>):
```js
import { inject } from '@ember/service';

export default class HelloWorld extends Component {
  @inject('user-authentication')
  userAuthentication;

  @inject('github') github;
}

```
---
<a id="injectAsAlias">**injectAsAlias**</a>

**Input** (<small>[injectAsAlias.input.js](transforms/named-service-injection/__testfixtures__/injectAsAlias.input.js)</small>):
```js
import { inject as service } from '@ember/service';

export default class HelloWorld extends Component {
  @service
  googleMaps;

  @service
  localStorage;
}

```

**Output** (<small>[injectAsAlias.output.js](transforms/named-service-injection/__testfixtures__/injectAsAlias.output.js)</small>):
```js
import { inject as service } from '@ember/service';

export default class HelloWorld extends Component {
  @service('google-maps')
  googleMaps;

  @service('local-storage')
  localStorage;
}

```
<!--FIXTURES_CONTENT_END-->