import { useState } from "react";
import { validateIssue } from "../utils/validateIssue";

function IssueForm({ onAddIssue }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("todo");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [errors, setErrors] = useState({});

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

   const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleAssignee = (event) => {
        setAssignee(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    const newIssue = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      priority,
      status,
      assignee: assignee.trim(),
    };

    const validationErrors = validateIssue(newIssue);

        setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
        return;
    }

    onAddIssue(newIssue);

    setErrors({});
    
    setDescription("");
    setAssignee("");
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
      {errors.title && <p>{errors.title}</p>}
      {errors.assignee && <p>{errors.assignee}</p>}
      {errors.priority && <p>{errors.priority}</p>}

      <textarea
      value={description}
      onChange={handleDescription}
      placeholder="Issue description"/>

      <input 
      type="text"
      value={assignee}
      onChange={handleAssignee}
      placeholder="Assignee name"
      required />

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