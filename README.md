# Toki-Config-File <!-- Repo Name -->
> Loads configuration from static file and returns it as an object <!-- Repo Brief Description -->

<!-- Long Description -->
This is the static file configuration loading submodule for the Toki project which is used by `toki-config` to load a toki configuration. See [toki](https://github.com/xogroup/toki) or [toki-config](https://github.com/xogroup/toki-config) for more details.

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

### Toki Configuration Schema

See the [Toki Configuration Schema](https://github.com/xogroup/toki-config/blob/master/schema.md) for schema specification.

## Development Setup

### Install Dependencies
Install the dependencies based on package.json.
```Text
make install
```

### Test Project
Run tests locally.
```Text
make test
```

<!-- Customize this if needed -->
<!-- Anything Else (Sponsors, Links, Etc) -->
