const Sasuke = require('../index').connection({
    host: '127.0.0.1',
    protocol: 'http://',
    user: 'admin',
    pass: 'admin',
    port: '5984',
});


describe('CouchDB Db Manager Testing', () => {
    it('run testConnection() method', (done) => {
        Sasuke
            .db()
            .testConnection()
            .then((response) => {
                done();
            })
            .catch((err) => {
                done(err);
            })
    });

    it('Run showDatabases() method', (done) => {
        Sasuke
            .db()
            .showDatabases()
            .then(() => {
                done();
            })
            .catch((err) => {
                done();
            });
    });
});

describe('QueryHelper Testing', () => {
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
});