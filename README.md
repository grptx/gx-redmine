# ES7 async wrapper for node-redmine package #

This is a wrapper for the `node-redmine` package in NPM that can be used with the ES7 async-await pattern, instead of using callbacks.

## Documentation ##

For all documentation, please see the documentation for the [node-redmine package](https://github.com/zanran/node-redmine) and from [Redmine's REST API](http://www.redmine.org/projects/redmine/wiki/Rest_api).

## Installation

To install gx-redmine, simply:

```shell
npm install gx-redmine
```

## Usage

```js
import RedmineAsync from "gx-redmine";

const hostname = process.env.REDMINE_HOST || 'http://localhost';
const config = {
  apiKey: process.env.REDMINE_APIKEY || '<your_redmine_rest_key>'
};
const redmine = new RedmineAsync(hostname, config);

// retrieve issues
const issues = await redmine.issues({limit: 2});

```

## Supported features for Redmine REST API

| Resource            | Status    | Availability | Supported |
|:--------------------|:----------|-------------:|:---------:|
| Issues              | Stable    |          1.0 |     ✓     |
| Projects            | Stable    |          1.0 |     ☓     |
| Project Memberships | Alpha     |          1.4 |     ☓     |
| Users               | Stable    |          1.1 |     ☓     |
| Time Entries        | Stable    |          1.1 |     ☓     |
| News                | Prototype |          1.1 |     ☓     |
| Issue Relations     | Alpha     |          1.3 |     ☓     |
| Versions            | Alpha     |          1.3 |     ☓     |
| Wiki Pages          | Alpha     |          2.2 |     ☓     |
| Queries             | Alpha     |          1.3 |     ☓     |
| Attachments         | Beta      |          1.3 |     ☓     |
| Issue Statuses      | Alpha     |          1.3 |     ☓     |
| Trackers            | Alpha     |          1.3 |     ☓     |
| Enumerations        | Alpha     |          2.2 |     ☓     |
| Issue Categories    | Alpha     |          1.3 |     ☓     |
| Roles               | Alpha     |          1.4 |     ☓     |
| Groups              | Alpha     |          2.1 |     ☓     |
| Custom Fields       | Alpha     |          2.4 |     ☓     |
| Search              | Alpha     |          3.3 |    N/A    |

## Feedback ##

Feedback, bug reports and pull requests are welcome. See the linked github repository.

## Links

* Redmine wiki page: http://www.redmine.org/projects/redmine/wiki/Rest_api
* NPM package: https://www.npmjs.com/package/node-redmine


## Notice
+ node-redmine only supports using the [JSON](http://en.wikipedia.org/wiki/JSON) format.