import { useState } from "react";
import { validateIssue } from "../utils/validateIssue";
import useUsers from "../hooks/useUsers";

function IssueForm({ onAddIssue }) {
  const { users, loading, error, retry } = useUsers();
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

      {loading ? (  
        <p>Loading users...</p>
          ) : error ? (
        <div>
           <p role="alert">{error}</p>
            <button type="button" onClick={retry}>
            Retry
           </button>
          </div>
          ): users.length === 0 ? (
         <p>No users available.</p>
        ) : (
          <select
           value={assignee}
            onChange={handleAssignee}
             required
          >
        <option value="">Select an assignee</option>

          {users.map((user) => (
            <option key={user.id} value={user.name}>
            {user.name}
          </option>
          ))}
        </select>
      )}
      {errors.title && <p>{errors.title}</p>}
      {errors.assignee && <p>{errors.assignee}</p>}
      {errors.priority && <p>{errors.priority}</p>}

        <label htmlFor="title">Title</label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Issue title"
          required
        />

        {errors.title && <p role="alert">{errors.title}</p>}
      <textarea
      value={description}
      onChange={handleDescription}
      placeholder="Issue description"/>

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