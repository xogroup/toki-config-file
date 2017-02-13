# Toki-Config-File <!-- Repo Name -->
> Loads configuration from static file and returns it as an object <!-- Repo Brief Description -->

<!-- Long Description -->
This is the static file configuration loader for the Toki project.

<!-- Maintainer (Hint, probably you) -->
Lead Maintainer: [Rob Horrigan](https://github.com/robhorrigan)

<!-- Badges Go Here -->

<!-- Build Status from Travis --><!-- Security Scan from Snyk.io --><!-- Security Scan from NSP -->
[![npm version](https://badge.fury.io/js/toki-config-file.svg)](https://badge.fury.io/js/toki-config-file)
[![Build Status](https://travis-ci.org/xogroup/toki-config-file.svg?branch=master)](https://travis-ci.org/xogroup/toki-config-file)
[![Known Vulnerabilities](https://snyk.io/test/github/xogroup/toki-config-file/badge.svg)](https://snyk.io/test/github/xogroup/toki-config-file)
[![NSP Status](https://nodesecurity.io/orgs/xo-group/projects/f49cc4e1-50db-40b1-9d18-b7a84b7f41eb/badge)](https://nodesecurity.io/orgs/xo-group/projects/f49cc4e1-50db-40b1-9d18-b7a84b7f41eb)

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

## Getting Started
To get started, create a `config` directory at the root of your project then add
a `default.js` or `default.json` file with the following format:

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
OR
```Javascript
{
    "toki": {
        "routes": [
            {
                "path"       : "/example",
                "httpAction" : "GET",
                "tags"       : ["api"],
                "description": "Example endpoint",
                "actions"    : [
                    {
                        "name": "action 1",
                        "type": "http"
                    },
                    [
                        {
                            "name": "action 2",
                            "type": "http"
                        },
                        {
                            "name": "action 3",
                            "type": "http"
                        }
                    ]
                ]
            }
        ]
    }
}
```

***

NOTE: If set, toki-config will use your `NODE_ENV` to determine which configuration to load.
```
$: echo $NODE_ENV
production
```
Will load configuration at `config/production.js` or `config/production.json`

**Obeys the import hierarchy described [here](https://github.com/lorenwest/node-config/wiki/Configuration-Files)

***

## Configuration Schema

<!-- TODO: Should link to schema definition in toki repo. -->
```Javascript
//executable action
action  = Joi.object().keys({
    name       : Joi.string(),

    //type is the custom action to be invoked
    type       : Joi.string(),

    description: Joi.string().optional()
}),

//parallel actions
actions = Joi.array().items(action).min(2),

//route configuration
routes  = Joi.object().keys({
    path       : Joi.string(),
    httpAction : Joi.string().valid('GET', 'POST'),
    tags       : Joi.array().items(Joi.string()).min(1),
    description: Joi.string(),
    actions    : Joi.array().items(action, actions).min(1)
}),

//Final overall schema
toki  = Joi.object().keys({
    routes: Joi.array().items(routes).min(1)
});
```

## Example

```Javascript
'use strict';

const Promise = require('bluebird');
const ConfigFile = require('toki-config-file');
const configFile = new ConfigFile();

const logConfig = () => {

    configFile.get()
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
