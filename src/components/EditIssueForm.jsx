import { useState } from "react";
import { validateIssue } from "../utils/validateIssue";

function EditIssueForm({ issue, onSave, onCancel }) {
  const [title, setTitle] = useState(issue.title);
  const [description, setDescription] = useState(issue.description || "");
  const [priority, setPriority] = useState(issue.priority);
  const [assignee, setAssignee] = useState(issue.assignee || "");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedIssue = {
      ...issue,
      title: title.trim(),
      description: description.trim(),
      priority,
      assignee: assignee.trim(),
    };

    const validationErrors = validateIssue(updatedIssue);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSave(updatedIssue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Issue</h3>

      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </label>
      {errors.title && <p>{errors.title}</p>}

      <label>
        Description
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>

      <label>
        Priority
        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      {errors.priority && <p>{errors.priority}</p>}

      <label>
        Assignee
        <input
          type="text"
          value={assignee}
          onChange={(event) => setAssignee(event.target.value)}
          required
        />
      </label>
      {errors.assignee && <p>{errors.assignee}</p>}

      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditIssueForm;