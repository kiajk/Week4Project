import { Link, useLocation } from "react-router";
import EditIssueForm from "./EditIssueForm";

function IssueList({
  issues = [],
  onDelete,
  onChangeStatus,
  editingIssueId,
  onEdit,
  onSaveEdit,
  onCancelEdit,
}) {
  const location = useLocation();

  if (issues.length === 0) {
    return (
      <p role="status">
        No issues found. Try a different search term or filter.
      </p>
    );
  }

  return (
    <ul>
      {issues.map((issue) => (
        <li key={issue.id}>
          {editingIssueId === issue.id ? (
            <EditIssueForm
              issue={issue}
              onSave={onSaveEdit}
              onCancel={onCancelEdit}
            />
          ) : (
            <>
              <strong>
                <Link to={`/issues/${issue.id}${location.search}`}>
                  {issue.title}
                </Link>
              </strong>

              {" — "}
              {issue.priority}
              {" — "}
              {issue.assignee}

              <select
                value={issue.status}
                onChange={(event) =>
                  onChangeStatus(issue.id, event.target.value)
                }
                aria-label={`Change status of ${issue.title}`}
              >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>

              <button
                type="button"
                onClick={() => onEdit(issue)}
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => onDelete(issue.id)}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default IssueList;