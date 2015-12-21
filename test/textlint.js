'use strict';

const textlint = new (require('textlint').TextLintEngine)({
    rules: ["no-todo", "no-mix-dearu-desumasu", "max-ten", "spellcheck-tech-word"]
});

describe('Validate config', () => {
    it('Valid Documents', (done) => {
        textlint.executeOnFiles(["./content"])
            .then(results => {
                textlint.isErrorResults(results).should.be.exactly(false);
                done();
            })
            .catch(error => done(error) );
    });
});
