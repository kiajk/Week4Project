import EditIssueForm from "./EditIssueForm";
function IssueList({
  issues,
  onDelete,
  onChangeStatus,
  editingIssueId,
  onEdit,
  onSaveEdit,
  onCancelEdit,
}) {
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
              <strong>{issue.title}</strong> — {issue.priority} —{" "}
              {issue.assignee}
              <select
                value={issue.status}
                onChange={(event) =>
                  onChangeStatus(issue.id, event.target.value)
                }
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