const VALID_PRIORITIES = ["low", "medium", "high"];

export function validateIssue(issue) {
  const errors = {};

  if (!issue.title.trim()) {
    errors.title = "Title is required.";
  } else if (issue.title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters.";
  }

  if (!VALID_PRIORITIES.includes(issue.priority)) {
    errors.priority = "Please select a valid priority.";
  }

  if (!issue.assignee.trim()) {
    errors.assignee = "Assignee is required.";
  }

  return errors;
}