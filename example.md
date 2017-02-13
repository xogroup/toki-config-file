## Example

NOTE: You must first define a configuration file. See [getting started guide](https://github.com/xogroup/toki-config#getting-started) for details.

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