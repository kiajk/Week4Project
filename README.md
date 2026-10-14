Issue Tracker Lite

A simple issue management application built with React and Vite.

Features

* Add new issues
* Edit existing issues
* Delete issues
* Change issue status
* Search issues by title
* Filter issues by status
* Validate issue forms
* Manage issue data with useReducer

Component Tree

App
└── IssueTracker
    ├── IssueForm
    ├── IssueSearch
    ├── IssueStatusFilter
    └── IssueList
        └── EditIssueForm

Component Responsibilities

App

* Entry point of the application UI.
* Renders the main issue-tracking interface.

IssueTracker

* Coordinates the main application interface.
* Connects issue management logic to the UI.
* Manages search, status filtering, and editing state.
* Passes the necessary data and callbacks to child components.

IssueForm

* Collects information for a new issue.
* Validates the form data.
* Calls the provided callback to add a new issue.
* Resets the form after successful submission.

IssueSearch

* Collects the search term.
* Notifies the parent component when the search term changes.

IssueStatusFilter

* Allows users to filter issues by status.
* Notifies the parent component when the selected status changes.

IssueList

* Renders the filtered list of issues.
* Provides controls for changing status, editing, and deleting issues.
* Displays EditIssueForm when an issue is being edited.

EditIssueForm

* Initializes the form with the selected issue’s data.
* Validates updated issue information.
* Saves valid changes or cancels editing.

State Management

useIssues

A custom hook that provides issue-related operations, including adding, updating, deleting, and changing the status of issues.

issuesReducer

Handles issue state transitions through actions such as:

* ADD_ISSUE
* UPDATE_ISSUE
* DELETE_ISSUE
* CHANGE_STATUS

filterIssues

A utility function that derives the visible issue list from the complete issue collection, search term, and selected status.

Filtering does not require separate state because the filtered list can be calculated from existing values.

validateIssue

A utility function that validates issue data before it is added or updated.

Technologies

* React
* Vite
* JavaScript
* React Hooks
* Context API (planned)

Getting Started

Install dependencies:

npm install

Start the development server:

npm run dev