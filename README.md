Issue Tracker Lite

A lightweight issue management application built with React and Vite.

The application allows users to create, view, edit, delete, search, and filter issues through a modular component architecture.

Features

* Create new issues with form validation
* Edit existing issues
* Delete existing issues
* Change issue status
* Assign issues to users fetched from an external API
* Search issues by title
* Filter issues by status
* Preserve search and filter settings in URL query parameters
* View issue details on a separate route
* Navigate back to the issue list while preserving filters
* Display an empty state when no issues match the current filters
* Handle loading and error states when fetching users
* Retry failed API requests
* Switch between light and dark themes using Context API
* Manage issue state with useReducer

Technologies

* React
* Vite
* JavaScript
* React Hooks
* useState
* useEffect
* useReducer
* Context API
* React Router
* Fetch API
* CSS

Component Tree

App
└── ThemeProvider
    └── IssueTracker
        ├── IssueForm
        ├── IssueSearch
        ├── IssueStatusFilter
        └── IssueList
            └── EditIssueForm
App
└── IssueDetails

Component Responsibilities

App

* Defines the top-level application structure.
* Configures the application’s routes.
* Connects the application to the theme context.

IssueTracker

* Coordinates the main issue-tracking interface.
* Connects issue operations to the UI.
* Manages the currently edited issue.
* Reads search and status filters from URL query parameters.
* Derives the visible issue list from the current issues and filters.
* Provides theme-related functionality to the interface.

IssueForm

* Collects information for a new issue.
* Validates issue data before submission.
* Fetches available assignees from an external API.
* Displays loading and error states during user fetching.
* Allows users to retry failed requests.
* Resets the form after successful submission.

IssueSearch

* Collects the search term.
* Notifies the parent component when the search term changes.

IssueStatusFilter

* Allows users to filter issues by status.
* Notifies the parent component when the selected status changes.

IssueList

* Renders the filtered issues.
* Provides controls for changing status, editing, and deleting issues.
* Links each issue to its details page.
* Preserves URL query parameters when navigating to issue details.
* Displays an empty-state message when no issues match the current filters.

EditIssueForm

* Initializes the form with the selected issue’s data.
* Validates updated issue information.
* Saves valid changes or cancels editing.

IssueDetails

* Displays the details of a selected issue.
* Uses route parameters to identify the selected issue.
* Provides navigation back to the issue list while preserving query parameters.
* Handles invalid issue identifiers.

State Management

useIssues

A custom hook that encapsulates issue state management using useReducer.

It provides operations for:

* Adding issues
* Updating issues
* Deleting issues
* Changing issue status

issuesReducer

Handles issue state transitions through the following actions:

* ADD_ISSUE
* UPDATE_ISSUE
* DELETE_ISSUE
* CHANGE_STATUS

ThemeContext

Provides the current theme and a toggleTheme function through Context API.

Theme state is managed separately from issue data because it represents a UI preference rather than issue-related application data.

Derived Data

The filterIssues utility derives the visible issue list from:

* The complete issue collection
* The search term
* The selected status

The filtered list is calculated from existing state rather than stored as separate state.

URL Query Parameters

Search and status filters are synchronized with URL query parameters.

This allows the application to preserve filter settings during navigation and browser refreshes.

Form Validation

The validateIssue utility validates issue data before it is added or updated.

It checks required fields and validates the selected priority.

Project Structure

src/
├── components/
├── context/
├── data/
├── hooks/
├── reducers/
├── utils/
├── App.jsx
└── main.jsx

Getting Started

Prerequisites

* Node.js
* npm

Installation

Clone the repository and navigate to the project directory.

Install the dependencies:

npm install

Development Server

Start the development server:

npm run dev

Open the local URL provided by Vite in your browser.

Production Build

Create a production build:

npm run build

Design Decisions

useReducer for Issue Management

useReducer centralizes issue-related state transitions and keeps update logic separate from UI components.

Context API for Theme

Context API makes the current theme and theme-toggle functionality available without passing those values through every intermediate component.

Derived Filtering

Search and status filtering are calculated from the existing issue collection and filter values. This avoids maintaining redundant filtered state.

URL-Based Filters

Query parameters preserve search and status filters across navigation and browser refreshes.

Component Separation

The interface is divided into smaller components with clear responsibilities to improve readability, maintainability, and reuse.

Notes

* The initial issue collection is provided by mock data.
* Available assignees are fetched from an external API.
* Issue data is managed in application state and is not persisted to a database.
* Refreshing the page resets issue changes unless persistence is implemented separately.