import { ADD_ISSUE, DELETE_ISSUE, CHANGE_STATUS } from "./issuesActions";

function addIssue(issues, newIssue) {
  return [...issues, newIssue];
}

function deleteIssue(issues, id) {
  return issues.filter((issue) => issue.id !== id);
}

function changeStatus(issues, id, status) {
  return issues.map((issue) =>
    issue.id === id ? { ...issue, status } : issue
  );
}

export function issuesReducer(issues, action) {
  switch (action.type) {
    case ADD_ISSUE:
      return addIssue(issues, action.payload);
    case DELETE_ISSUE:
      return deleteIssue(issues, action.payload.id);
    case CHANGE_STATUS:
      return changeStatus(issues, action.payload.id, action.payload.status);
    default:
      return issues;
  }
}