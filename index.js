/**
 * @fileoverview ES7 wrapper for the axios-redmine package.
 */

'use strict';

const Redmine = require('@grptx/node-redmine');

class RedmineAsync {

    constructor(hostname, config, port) {
        this._redmine = new Redmine(hostname, config, port);
    }

    /////////////////////////////////////// REST API for Issue Relations (Alpha) ///////////////////////////////////////

    /**
     * Returns the relations for the issue of given id (:issue_id).
     * http://www.redmine.org/projects/redmine/wiki/Rest_IssueRelations#GET
     */
    issueRelationByIssueId(id){
        return new Promise((resolve, reject) => {
            this._redmine.issue_relation_by_issue_id(id, function(err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            });
        })
    }

    /**
     * Creates a relation for the issue of given id (:issue_id).
     * http://www.redmine.org/projects/redmine/wiki/Rest_IssueRelations#POST
     */
    createIssueRelation(id, param) {
        return new Promise((resolve, reject) => {
            this._redmine.create_issue_relation(id, param, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            });
        })
    }

    /**
     * Returns the relation of given id.
     * http://www.redmine.org/projects/redmine/wiki/Rest_IssueRelations#GET-2
     */
    issueRelationById(id) {
        return new Promise((resolve, reject) => {
            this._redmine.issue_relation_by_id(id, function(err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            });
        });
    }

    /**
     * Deletes the relation of given id.
     * http://www.redmine.org/projects/redmine/wiki/Rest_IssueRelations#DELETE
     */
    deleteIssueRelation(id) {
        return new Promise((resolve, reject) => {
            this._redmine.delete_issue_relation(id, function(err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            });
        });
    }

    /////////////////////////////////////// REST API for issues (Stable) ///////////////////////////////////////

    /**
     * Listing issues
     *    Returns a paginated list of issues. By default, it returns open issues only.
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Listing-issues
     */
    issues(params) {
        return new Promise((resolve, reject) => {
            this._redmine.issues(params, function (err, data) {
                if (err) reject(err);
                else
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
                else if (data === undefined) reject(err);
                else
                resolve(data);
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
                else
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
            this._redmine.update_issue(id, issue, function (err, data) {
                if (err) reject(err);
                else
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
                else
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
                else
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
                else
                resolve(data);
            });
        });
    };

    /////////////////////////////////////// REST API for Common (Alpha) ///////////////////////////////////////
    /**
     * upload a file to redmine
     * http://www.redmine.org/projects/redmine/wiki/Rest_WikiPages#Attaching-files
     */
    upload(content) {
        return new Promise((resolve, reject) => {
           this._redmine.upload(content, function (err, data) {
               if (err) reject(err);
               else
                   resolve(data);
           })
        });
    }

    /////////////////////////////////////// REST API for Users (Stable) ///////////////////////////////////////
    /**
     * list Users
     * http://www.redmine.org/projects/redmine/wiki/Rest_Users#GET
     */
    users(params) {
        return new Promise((resolve, reject) => {
            this._redmine.users(params, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Returns the user details
     * http://www.redmine.org/projects/redmine/wiki/Rest_Users#GET-2
     */
    getUserById(id, params) {
        return new Promise((resolve, reject) => {
            this._redmine.get_user_by_id(id, params, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Returns current user details
     * http://www.redmine.org/projects/redmine/wiki/Rest_Users#GET-2
     */
    currentUser(params) {
        return new Promise((resolve, reject) => {
            this._redmine.current_user(params, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * create user
     * http://www.redmine.org/projects/redmine/wiki/Rest_Users#POST
     */
    createUser(params) {
        return new Promise((resolve, reject) => {
            this._redmine.create_user(params, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * update user
     * http://www.redmine.org/projects/redmine/wiki/Rest_Users#PUT
     */
    updateUser(id, params) {
        return new Promise((resolve, reject) => {
            this._redmine.update_user(id, params, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Deleting user
     * http://www.redmine.org/projects/redmine/wiki/Rest_Users#DELETE
     */
    deleteUser(id) {
        return new Promise((resolve, reject) => {
            this._redmine.delete_user(id, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /////////////////////////////////////// REST API for Groups (Alpha) ///////////////////////////////////////
    /**
     * Returns the list of Groups
     * http://www.redmine.org/projects/redmine/wiki/Rest_Groups#groupsformat
     */
    groups() {
        return new Promise((resolve, reject) => {
            this._redmine.groups(function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Creates a Group
     * http://www.redmine.org/projects/redmine/wiki/Rest_Groups#POST
     */
    createGroup(params) {
        return new Promise((resolve, reject) => {
            this._redmine.create_group(params, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Returns details of a group.
     * http://www.redmine.org/projects/redmine/wiki/Rest_Groups#GET-2
     */
    groupById(id, params) {
        return new Promise((resolve, reject) => {
            this._redmine.group_by_id(id, params, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Updates an existing group
     * http://www.redmine.org/projects/redmine/wiki/Rest_Groups#PUT
     */
    updateGroup(id, params) {
        return new Promise((resolve, reject) => {
            this._redmine.update_group(id, params, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Deletes an existing group
     * http://www.redmine.org/projects/redmine/wiki/Rest_Groups#DELETE
     */
    deleteGroup(id) {
        return new Promise((resolve, reject) => {
            this._redmine.delete_group(id, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Adds an existing user to a group
     * http://www.redmine.org/projects/redmine/wiki/Rest_Groups#POST-2
     */
    addUserToGroup(group_id, user_id) {
        return new Promise((resolve, reject) => {
            this._redmine.add_user_to_group(group_id, user_id, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }

    /**
     * Removes a user from a group
     * http://www.redmine.org/projects/redmine/wiki/Rest_Groups#DELETE-2
     */
    removeUserFromGroup(group_id, user_id) {
        return new Promise((resolve, reject) => {
            this._redmine.remove_user_from_group(group_id, user_id, function (err, data) {
                if (err) reject(err);
                else
                    resolve(data);
            })
        });
    }
}

module.exports = RedmineAsync;
