# Toki-Config-File <!-- Repo Name -->
> Loads configuration from static file and returns it as an object <!-- Repo Brief Description -->

<!-- Long Description -->
This is the static file configuration loader for the Toki project.

<!-- Maintainer (Hint, probably you) -->
Lead Maintainer: [Rob Horrigan](https://github.com/robhorrigan)

<!-- Badges Go Here -->

<!-- Build Status from Travis -->
<!-- Security Scan from Snyk.io -->
<!-- Security Scan from NSP -->

<!-- End Badges -->
<!-- Quick Example -->
## Install Dependencies
Install the dependencies based on package.json.
```Text
make install
```

## Test Project
Run tests locally.
```Text
make test
```

## Example
To get started, create a `config` directory at the root of your project then add
a `default.js` file with the following format:

```Javascript
'use strict';

const configuration = {
    toki: {
        routes: [
            {
                path       : '/example',
                httpAction : 'GET',
                tags       : ['api'],
                description: 'Example endpoint',
                actions    : [
                    {
                        name: 'action 1',
                        type: 'http'
                    },
                    [
                        {
                            name: 'action 2',
                            type: 'http'
                        },
                        {
                            name: 'action 3',
                            type: 'http'
                        }
                    ]
                ]
            }
        ]
    }
};

module.exports = configuration;
```

***

NOTE: If set, toki-config will use your `NODE_ENV` to determine which configuration to load.
```
$: echo $NODE_ENV
production
```
Will load configuration at `config/production.js`

***

```Javascript
'use strict';

const Promise = require('bluebird');
const Config = require('toki-config-file');
const config = new Config();

const logConfig = () => {

    config.get()
        .then((configuration) => {
            console.log(configuration.routes[0].path) // /example
        })
        .catch((err) => {
            throw err;
        });
};

module.exports = () => {

    return Promise.resolve()
        .bind()
        .then(logConfig)
        .catch(function(err) {
            console.log(err);
        })
};
```

<!-- Customize this if needed -->

<!-- Anything Else (Sponsors, Links, Etc) -->
