import { useState } from "react";

function IssueForm({ onAddIssue }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("todo");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newIssue = {
      id: crypto.randomUUID(),
      title: title.trim(),
      priority,
      status,
      assignee: "",
    };

    if (!newIssue.title) return;

    onAddIssue(newIssue);

    setTitle("");
    setPriority("medium");
    setStatus("todo");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Issue</h2>

      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Issue title"
        required
      />

      <select value={priority} onChange={handlePriority}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select value={status} onChange={handleStatus}>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button type="submit">Add Issue</button>
    </form>
  );
}

export default IssueForm;