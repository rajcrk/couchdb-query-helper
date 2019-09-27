var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

const Sasuke = require('../index').connection({
    host: '127.0.0.1',
    protocol: 'http://',
    user: 'admin',
    pass: 'admin',
    port: '5984',
});


describe('couchDB Db manager test', () => {
    let dbName = `sample${Date.now()}`;

    it('run testConnection() method', (done) => {
        Sasuke
            .db()
            .testConnection()
            .then((response) => done())
            .catch((err) => done(err))
    });

    it(`Creating a database named ${dbName}`, (done) => {
        Sasuke
            .db()
            .createDatabase(dbName)
            .then((response) => done())
            .catch((err) => done());
    });

    it(`Check if ${dbName} db is present`, (done) => {
        Sasuke
            .db()
            .showDatabases()
            .then((dbs) => {
                assert.include(dbs, dbName, `database ${dbName} was not created`);
                done();
            })
            .catch((err) => done(err));
    });

    it('drop the newly created database', (done) => {
        Sasuke
            .db()
            .dropDatabase(dbName)
            .then(() => done())
            .catch((err) => done(err));
    });

    it('Run showDatabases() method', (done) => {
        Sasuke
            .db()
            .showDatabases()
            .then(() => done())
            .catch((err) => done());
    });
});

describe('query.helper test', () => {
    let selectorSample = {
        "selector": {
            "info": "lorem ipsum"
        }
    };
    it('Select all from a database', (done) => {
        Sasuke
            .query()
            .selectAll('baseball')
            .then(() => done())
            .catch((err) => done());
    });
    it('Insert document', (done) => {
        Sasuke
            .query()
            .insert('002', { info: "lorem ipsum" }, 'baseball')
            .then(() => done())
            .catch((err) => done());
    });
    it('Delete a Document', (done) => {
        Sasuke
            .query()
            .delete('002', 'baseball')
            .then(() => done())
            .catch((err) => done());
    });
    it('Select with condition', (done) => {
        Sasuke
            .query()
            .select(['info'], ['lorem ipsum'], 'baseball')
            .then(() => done())
            .catch((err) => done(err));
    });
    it('bare select', (done) => {
        Sasuke
            .query()
            .bareSelect('baseball', selectorSample)
            .then(() => done())
            .catch((err) => done(err));
    });
});

describe('test couch functions', () => {
    it('get uuids', (done) => {
        Sasuke
            .couch()
            .getUuids()
            .then(() => done())
            .catch((err) => done(err));
    });
});