'use strict';

const toml = require('toml'),
      fs = require('fs');

describe('Validate config', () => {
    it('Valid config file', () => {
        let config = fs.readFileSync('./config.toml', 'utf-8'),
            data;
        try {
            data = toml.parse(config);
        } catch(e) {
            console.error(e);
        }
        data.should.be.an.instanceOf(Object)
            .and.have.property('baseurl', 'https://makotomiura.com/');
    });
});
