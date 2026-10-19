import { useState, useContext } from "react";
import { useSearchParams } from "react-router";

import IssueForm from "./IssueForm";
import IssueSearch from "./IssueSearch";
import IssueList from "./IssueList";
import IssueStatusFilter from "./IssueStatusFilter";

import { useIssues } from "../hooks/useIssues";
import { filterIssues } from "../utils/filterIssues";
import { ThemeContext } from "../context/ThemeContext";

function IssueTracker() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const {
    issues,
    addIssue,
    deleteIssue,
    changeStatus,
    updateIssue,
  } = useIssues();

  const [editingIssue, setEditingIssue] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const statusFilter = searchParams.get("status") || "all";

  const filteredIssues = filterIssues(
    issues,
    searchTerm,
    statusFilter
  );

  const handleSearchChange = (value) => {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);

      if (value) {
        nextParams.set("search", value);
      } else {
        nextParams.delete("search");
      }

      return nextParams;
    });
  };

  const handleStatusChange = (value) => {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);

      if (value === "all") {
        nextParams.delete("status");
      } else {
        nextParams.set("status", value);
      }

      return nextParams;
    });
  };

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

      <IssueSearch
        onSearchChange={handleSearchChange}
      />

      <IssueStatusFilter
        statusFilter={statusFilter}
        onStatusChange={handleStatusChange}
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