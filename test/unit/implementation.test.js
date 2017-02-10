'use strict';

const Promise = require('bluebird');
const EventEmitter = require('events');
const ConfigFile = require('../../lib/implementation');

const EzConfig = require('ez-config');
const Sinon = require('sinon');
const TestConfig = require('./.mm./fixtures/config/test.json');

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;
const before = lab.before;
const after = lab.after;

let mockEzConfig;

describe('unit tests - implementation', () => {

    it('should be instantiated', () => {

        return new Promise((resolve) => {

            const config = new ConfigFile();
            expect(config).to.be.instanceof(ConfigFile);

            resolve();
        });
    });

    it('should be instance of Event Emitter', () => {

        return new Promise((resolve) => {

            const config = new ConfigFile();
            expect(config).to.be.instanceof(EventEmitter);

            resolve();
        });
    });

    describe('with test configuration', () => {

        before(() => {

            return new Promise((resolve) => {

                mockEzConfig = Sinon.stub(EzConfig, 'get', () => {

                    return TestConfig;
                });

                resolve();
            });
        });

        after(() => {

            return new Promise((resolve) => {

                mockEzConfig.restore();

                resolve();
            });
        });

        it('should return configuration as an object with proper assignments', () => {

            const config = new ConfigFile();
            return config.get()
                .then((contents) => {

                    expect(contents).to.be.an.object();
                    expect(contents.routes).to.an.array();
                    expect(contents.routes[0]).to.be.an.object();
                    expect(contents.routes[0].path).to.be.a.string();
                    expect(contents.routes[0].path).to.equal('/test');
                    expect(contents.routes[0].httpAction).to.be.a.string();
                    expect(contents.routes[0].httpAction).to.equal('GET');
                    expect(contents.routes[0].tags).to.be.an.array();
                    expect(contents.routes[0].tags[0]).to.equal('api');
                    expect(contents.routes[0].description).to.be.a.string();
                    expect(contents.routes[0].description).to.equal('Test endpoint for all clients');
                    expect(contents.routes[0].actions).to.be.an.array();
                    expect(contents.routes[0].actions[0]).to.be.an.object();
                    expect(contents.routes[0].actions[1]).to.be.an.array();
                });
        });
    });

    describe('with missing configuration', () => {

        before(() => {

            return new Promise((resolve) => {

                mockEzConfig = Sinon.stub(EzConfig, 'get', () => {

                    return undefined;
                });

                resolve();
            });
        });

        after(() => {

            return new Promise((resolve) => {

                mockEzConfig.restore();

                resolve();
            });
        });

        it('should return error if missing config', () => {

            const config = new ConfigFile();
            return config.get()
                .catch((err) => {

                    expect(err).to.be.an.error();
                    expect(err.message).to.equal('Unable to load configuration');
                });
        });
    });
});
