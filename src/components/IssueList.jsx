import { mockIssues } from "../data/mockIssues";

function IssueList() {
  return (
    <ul>
      {mockIssues.map((issue) => (
        <li key={issue.id}>
          {issue.title} — {issue.status} — {issue.priority}
        </li>
      ))}
    </ul>
  );
}

export default IssueList;