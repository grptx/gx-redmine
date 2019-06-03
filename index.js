/**
 * @fileoverview ES7 wrapper for the axios-redmine package.
 */

'use strict';

const Redmine = require('node-redmine');

class RedmineAsync {

    constructor(hostname, config, port) {
        this._redmine = new Redmine(hostname, config, port);
    }

    /**
     * Listing issues
     *    Returns a paginated list of issues. By default, it returns open issues only.
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Listing-issues
     */
    issues(params) {
        return new Promise((resolve, reject) => {
            this._redmine.issues(params, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    /**
     * Showing an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Showing-an-issue
     */
    getIssueById(id, params) {
        return new Promise((resolve, reject) => {
            this._redmine.get_issue_by_id(id, params, function (err, data) {
                if (err) reject(err);
                resolve(data.issue);
            });
        });
    }

    /**
     * Creating an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Creating-an-issue
     */
    createIssue(issue) {
        return new Promise((resolve, reject) => {
            this._redmine.create_issue(issue, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    };

    /**
     * Updating an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Updating-an-issue
     */
    updateIssue(id, issue) {
        return new Promise((resolve, reject) => {
            this._redmine.update_issue(is, issue, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    };

    /**
     * Deleting an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Deleting-an-issue
     */
    deleteIssue(id, issue) {
        return new Promise((resolve, reject) => {
            this._redmine.delete_issue(issue, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    };

    /**
     * Adding a watcher
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Adding-a-watcher
     */
    addWatcher(id, params) {
        return new Promise((resolve, reject) => {
            this._redmine.add_watcher(id, params, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    };

    /**
     * Removing a watcher
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Removing-a-watcher
     */
    removeWatcher(id, params) {
        return new Promise((resolve, reject) => {
            this._redmine.remove_watcher(id, params, function (err, data) {
                if (err) reject(err);
                resolve(data);
            });
        });
    };
}

module.exports = RedmineAsync;