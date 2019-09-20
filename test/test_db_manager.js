const Sasuke = require('../index').connection({
    host: 'local',
    user: '',
});

describe('CouchDB Db Manager Testing', () => {
    it('run testConnection() method', (done) => {
        Sasuke
            .db()
            .testConnection()
            .then(() => {
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
                done(err);
            });
    });
});

describe('QueryHelper Testing', () => {
    it('Select all from a database', (done) => {
        Sasuke
            .query()
            .selectAll('_users')
            .then(() => done())
            .catch((err) => done(err));
    });
    it('Insert document', (done) => {
        Sasuke
            .query()
            .insert('003', { info: "Random Value"}, 'baseball')
            .then(() => done())
            .catch((err) => done(err));
    });
    it('Delete a Document', (done) => {
        Sasuke
            .query()
            .delete('002', 'baseball')
            .then(() => done())
            .catch((err) => done(err));
    });
});