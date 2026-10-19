import { Link, useParams, useLocation } from "react-router";
import { mockIssues } from "../data/mockIssues";

function IssueDetails() {
  const { issueId } = useParams();
  const location = useLocation();

  const issue = mockIssues.find(
    (item) => item.id === Number(issueId)
  );

  const backToIssues = `/issues${location.search}`;

  if (!issue) {
    return (
      <main>
        <h1>Issue Not Found</h1>
        <p>No issue exists with ID {issueId}.</p>

        <Link to={backToIssues}>
          Back to Issues
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{issue.title}</h1>

      <p>
        <strong>ID:</strong> {issue.id}
      </p>

      <p>
        <strong>Status:</strong> {issue.status}
      </p>

      <p>
        <strong>Priority:</strong> {issue.priority}
      </p>

      <p>
        <strong>Assignee:</strong> {issue.assignee}
      </p>

      <Link to={backToIssues}>
        Back to Issues
      </Link>
    </main>
  );
}

export default IssueDetails;