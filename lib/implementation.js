'use strict';

const Promise = require('bluebird');
const EventEmitter = require('events');
const Config = require('ez-config');

class ConfigFile extends EventEmitter {

    constructor(options) {

        super();

        this.options = options;
    }


    get() {

        return Promise.resolve()
            .bind()
            .then(this._returnConfig)
            .catch(this._error);
    }

    // private methods
    _returnConfig() {

        return new Promise((resolve, reject) => {

            let config;

            try {
                config = Config.get('toki');

                if (!config) {
                    throw new Error('Unable to load configuration');
                }
            }
            catch (e) {
                reject(e);
            }

            return resolve(config);
        });
    }

    _error(err) {

        return Promise.reject(err);
    }
}

module.exports = ConfigFile;
