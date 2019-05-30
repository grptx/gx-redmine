/**
 * @fileoverview ES7 wrapper for the axios-redmine package.
 */

'use strict';

const Redmine = require('node-redmine');

class RedmineAsync {

    _redmine;

    constructor(hostname, config) {
        this._redmine = new Redmine(hostname, config);
    }

    issue(params) {
        return new Promise((resolve, reject)=> {
            this._redmine.issue(params).then((result) => {
                resolve(result);
            }).catch((error) => {
                reject(error);
            })
        });
    }
}