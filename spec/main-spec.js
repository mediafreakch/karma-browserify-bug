describe('The karma browserify bug', function() {
    var template = require('../index.js');

    it('manifests itself by failing this test', function() {
        expect(template({ name: 'Antony' })).toMatch('<strong>Antony</strong>');
    });
});
