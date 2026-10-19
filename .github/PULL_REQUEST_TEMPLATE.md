Features

* Implemented issue creation, editing, deletion, and status updates.
* Added issue search and status filtering.
* Added issue details pages using dynamic route parameters.
* Preserved search and filter query parameters during navigation.
* Added form validation.
* Added an assignee dropdown populated from an API.
* Implemented theme switching using React Context.

API & Error Handling

* Fetches users from an external API.
* Handles loading and error states.
* Provides a retry mechanism for failed requests.
* Handles request cancellation and effect cleanup.

Known Limitations

* Issues are managed in client-side state and are not persisted to a backend.
* Issue data may reset after refreshing the page.
* Verify whether the issue details page reflects changes made in the main tracker.
* Authentication and authorization are not implemented.

Questions for Mentor

* Is the current component structure appropriate?
* Are the state management decisions suitable for this project?
* Could API error handling or request cancellation be improved?
* Is the routing approach appropriate?

Summary

Built a React-based Issue Tracker Lite application with issue management, search, filtering, API integration, form validation, and client-side routing.

Architecture & State Decisions

* useReducer: Manages related issue operations, including adding, editing, deleting, and changing status.
* useState: Manages simple local UI state and form inputs.
* Context API: Shares the current theme and toggle function without prop drilling.
* Derived Data: Computes filtered issues from the source list and current filters.
* Custom Hook: Encapsulates issue state management in useIssues.
* useEffect: Handles API requests and request cleanup.
* React Router: Manages dynamic routes and query parameters.

Manual Verification

* Create an issue.
* Validate required and invalid form inputs.
* Edit and delete an issue.
* Change issue status.
* Search and filter issues.
* Verify the empty state.
* Navigate between the list and details pages.
* Verify query parameter preservation.
* Test API loading, error, and retry states.
* Verify theme switching.
* Run npm run build.

What I Learned

* Managing related state transitions with useReducer.
* Choosing between useState and useReducer.
* Avoiding prop drilling with Context API.
* Using derived data instead of duplicate state.
* Handling API requests, loading, errors, retries, and cancellation.
* Building reusable components and custom hooks.
* Implementing dynamic routes and query parameters.
* Organizing a maintainable React project.