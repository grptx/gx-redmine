import { Issue, IssueData, Redmine } from "./redmine";

export class RedmineAsync {
    private _redmine: Redmine;

    public constructor(hostname: string, config: any, port: number) {
        this._redmine = new Redmine(hostname, config, port);
    }

    /**
     * Listing issues
     *    Returns a paginated list of issues. By default, it returns open issues only.
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Listing-issues
     */
    public issues(params: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this._redmine.issues(
                params, (err: any, data: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
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
            this._redmine.get_issue_by_id(id, params, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    /**
     * Creating an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Creating-an-issue
     */
    public createIssue(issue: IssueData): Promise<any> {
        return new Promise((resolve, reject) => {
            this._redmine.create_issue(issue, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    /**
     * Updating an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Updating-an-issue
     */
    public updateIssue(id, issue): Promise<any> {
        return new Promise((resolve, reject) => {
            this._redmine.update_issue(id, issue, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    /**
     * Deleting an issue
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Deleting-an-issue
     */
    public deleteIssue(id, issue): Promise<any> {
        return new Promise((resolve, reject) => {
            this._redmine.delete_issue(issue, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    /**
     * Adding a watcher
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Adding-a-watcher
     */
    public addWatcher(id, params): Promise<any> {
        return new Promise((resolve, reject) => {
            this._redmine.add_watcher(id, params, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    /**
     * Removing a watcher
     * http://www.redmine.org/projects/redmine/wiki/Rest_Issues#Removing-a-watcher
     */
    public removeWatcher(id, params): Promise<any> {
        return new Promise((resolve, reject) => {
            this._redmine.remove_watcher(id, params, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
}
