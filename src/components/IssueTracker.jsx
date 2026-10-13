import { useState } from "react";
import IssueForm from "./IssueForm";
import IssueSearch from "./IssueSearch";
import IssueList from "./IssueList";
import { useIssues } from "../hooks/useIssues";
import { filterIssues } from "../utils/filterIssues";
import IssueStatusFilter from "./IssueStatusFilter";

function IssueTracker() {
  const { issues, addIssue, deleteIssue, changeStatus } = useIssues();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const filteredIssues = filterIssues(issues, searchTerm, statusFilter);

  return (
    <main>
      <h1>Issue Tracker Lite</h1>

      <IssueForm onAddIssue={addIssue} />

      <IssueSearch onSearchChange={setSearchTerm} />

      <IssueStatusFilter
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        />

      <IssueList
        issues={filteredIssues}
        onDelete={deleteIssue}
        onChangeStatus={changeStatus}
      />
    </main>
  );
}

export default IssueTracker;