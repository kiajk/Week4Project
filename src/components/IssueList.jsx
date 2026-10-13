function IssueList({ issues, onDelete, onChangeStatus }) {
  return (
    <ul>
      {issues.map((issue) => (
        <li key={issue.id}>
          {issue.title} — {issue.priority}{" "}
          <select
            value={issue.status}
            onChange={(e) => onChangeStatus(issue.id, e.target.value)}
          >
            <option value="todo">todo</option>
            <option value="in-progress">in-progress</option>
            <option value="done">done</option>
          </select>{" "}
          <button onClick={() => onDelete(issue.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default IssueList;