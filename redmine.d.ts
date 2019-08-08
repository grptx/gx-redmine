interface IssueRecord {
    id: number;
    project: IssueRecordField;
    tracker: IssueRecordField;
    status: IssueRecordField;
    priority: IssueRecordField;
    author: IssueRecordField;
    assigned_to: IssueRecordField;
    parent?: IssueRecordField;
    subject: string;
    description: string;
    start_date: string | null;
    due_date: string | null;
    done_ratio: number;
    is_private: boolean;
    total_estimated_hours: number | null;
    created_at: string;
    updated_at: string | null;
    closed_on: string | null;
}
interface IssueRecordField {
    id: number;
    name?: string;
}

interface IssueParams {
    project_id?: number;
    tracker_id?: number;
    priority_id?: number;
    category_id?: number;
    status_id?: number;
    assigned_to_id?: number;
    subject?: string;
    description?: string;
    parent_issue_id?: number;
    notes?: string;
    uploads?: UploadRecord[];
}

interface UploadResult {
    upload: UploadRecord;
}

interface UploadRecord {
    token: string;
    content_type?: string;
    filename: string;
}

export interface IssueData {
    issue: IssueParams;
}

export interface Issue {
    issue: IssueRecord;
}

export interface Issues {
    issues: IssueRecord[];
}
export declare class Redmine {
    constructor(host: string, config: any, port: number);

    public issues(params: any, callback: (err: any, data: any) => void): Issues;

    public get_issue_by_id(id: number, params: any, callback: (err: any, data: any) => void): Issue;

    public create_issue(issue: IssueData, callback: (err: any, data: any) => void): Issue;

    public update_issue

    public delete_issue

    public add_watcher

    public remove_watcher
}
