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

    /////////////////////////////////////// REST API for issues (Stable) ///////////////////////////////////////

    public issues(params: any, callback: (err: any, data: any) => void): Issues;

    public get_issue_by_id(id: number, params: any, callback: (err: any, data: any) => void): Issue;

    public create_issue(issue: IssueData, callback: (err: any, data: any) => void): Issue;

    public update_issue(id: number, issue: IssueData, callback: (err: any, data: any) => void): Issue;

    public delete_issue(id: number, callback: (err: any, data: any) => void): void;

    public add_watcher(id: number, params: any, callback: (err: any, data: any) => void): void;

    public remove_watcher(id: number, params: any, callback: (err: any, data: any) => void): void;

    /////////////////////////////////////// REST API for Issue Relations (Alpha) ///////////////////////////////////////

    public issue_relation_by_issue_id(id: number, callback: (err: any, data: any) => void): void;

    public create_issue_relation(id: number, params: any, callback: (err: any, data: any) => void): void;

    public issue_relation_by_id(id: number, callback: (err: any, data: any) => void): void;

    public delete_issue_relation(id: number, callback: (err: any, data: any) => void): void;

    /////////////////////////////////////// REST API for Common (Alpha) ///////////////////////////////////////

    public upload(content: any, callback: (err: any, data: any) => void): UploadResult;
}
