import { Issue, IssueData, Issues, Redmine } from "./redmine";

export class RedmineAsync {
    private _redmine: Redmine;

    public constructor(hostname: string, config: any, port: number) {
        this._redmine = new Redmine(hostname, config, port);
    }

    /////////////////////////////////////// REST API for Common (Alpha) ///////////////////////////////////////
    /**
     * upload a file to redmine
     * http://www.redmine.org/projects/redmine/wiki/Rest_WikiPages#Attaching-files
     */
    public upload(content: any) {
        return new Promise((resolve, reject) => {
            this._redmine.upload(content, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /////////////////////////////////////// REST API for Issue Relations (Alpha) ///////////////////////////////////////

    /**
     * Returns the relations for the issue of given id (:issue_id).
     * http://www.redmine.org/projects/redmine/wiki/Rest_IssueRelations#GET
     */
    public issueRelationByIssueId(id: number) {
        return new Promise((resolve, reject) => {
            this._redmine.issue_relation_by_issue_id(id, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Creates a relation for the issue of given id (:issue_id).
     * http://www.redmine.org/projects/redmine/wiki/Rest_IssueRelations#POST
     */
    public createIssueRelation(id: number, param: any) {
        return new Promise((resolve, reject) => {
            this._redmine.create_issue_relation(id, param, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Returns the relation of given id.
     * http://www.redmine.org/projects/redmine/wiki/Rest_IssueRelations#GET-2
     */
    public issueRelationById(id: number) {
        return new Promise((resolve, reject) => {
            this._redmine.issue_relation_by_id(id, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Deletes the relation of given id.
     * http://www.redmine.org/projects/redmine/wiki/Rest_IssueRelations#DELETE
     */
    public deleteIssueRelation(id: number) {
        return new Promise((resolve, reject) => {
            this._redmine.delete_issue_relation(id, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /////////////////////////////////////// REST API for issues (Stable) ///////////////////////////////////////

    /**
     * Listing issues
     *    Returns a paginated list of issues. By default, it returns open issues only.
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Listing-issues
     */
    public issues(params: any): Promise<Issues> {
        return new Promise((resolve, reject) => {
            this._redmine.issues(
                params, (err: any, data: any) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                }
            );
        });
    }

    /**
     * Showing an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Showing-an-issue
     */
    public getIssueById(id: number, params: IssueData): Promise<Issue> {
        return new Promise((resolve, reject) => {
            this._redmine.get_issue_by_id(id, params, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Creating an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Creating-an-issue
     */
    public createIssue(issue: IssueData): Promise<Issue> {
        return new Promise((resolve, reject) => {
            this._redmine.create_issue(issue, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Updating an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Updating-an-issue
     */
    public updateIssue(id: number, issue: IssueData): Promise<Issue> {
        return new Promise((resolve, reject) => {
            this._redmine.update_issue(id, issue, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Deleting an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Deleting-an-issue
     */
    public deleteIssue(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this._redmine.delete_issue(id, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Adding a watcher
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Adding-a-watcher
     */
    public addWatcher(id: number, params: any): Promise<void> {
        return new Promise((resolve, reject) => {
            this._redmine.add_watcher(id, params, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Removing a watcher
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Removing-a-watcher
     */
    public removeWatcher(id: number, params: any): Promise<void> {
        return new Promise((resolve, reject) => {
            this._redmine.remove_watcher(id, params, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
