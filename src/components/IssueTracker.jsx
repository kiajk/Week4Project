import { useState } from "react";
import IssueForm from "./IssueForm";
import IssueSearch from "./IssueSearch";
import IssueList from "./IssueList";
import { useIssues } from "../hooks/useIssues";
import { filterIssues } from "../utils/filterIssues";
import IssueStatusFilter from "./IssueStatusFilter";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function IssueTracker() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { issues, addIssue, deleteIssue, changeStatus, updateIssue } = useIssues();

  const [searchTerm, setSearchTerm] = useState("");
  const [editingIssue, setEditingIssue] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const filteredIssues = filterIssues(issues, searchTerm, statusFilter);

  const handleSaveEdit = (updatedIssue) => {
  updateIssue(updatedIssue);
  setEditingIssue(null);
    };

  const handleCancelEdit = () => {
  setEditingIssue(null);
    };
  return (
    <main className={`app ${theme}`}>
      <h1>Issue Tracker Lite</h1>

      <button type="button" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

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
        editingIssueId={editingIssue?.id}
        onEdit={setEditingIssue}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
      />
    </main>
  );
}

export default IssueTracker;