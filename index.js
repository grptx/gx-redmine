/**
 * @fileoverview ES7 wrapper for the axios-redmine package.
 */

'use strict';

const Redmine = require('node-redmine');

class RedmineAsync {

    constructor(hostname, config) {
        this._redmine = new Redmine(hostname, config);
    }

    issues(params) {
        return new Promise((resolve, reject)=> {
            this._redmine.issues(params, function(err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = RedmineAsync;