import IssueForm from "./components/IssueForm";
import IssueList from "./components/IssueList";
import { useIssues } from "./hooks/useIssues";
function App() {
  const { issues, addIssue, deleteIssue, changeStatus } = useIssues();
  return (
    <main>
      <h1>Issue Tracker Lite</h1>
      <IssueForm onAddIssue={addIssue} />
      <IssueList
        issues={issues}
        onDelete={deleteIssue}
        onChangeStatus={changeStatus}
      />
    </main>
  );
}
export default App;