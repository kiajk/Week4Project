function IssueStatusFilter({ statusFilter, onStatusChange }) {
return (
<select
value={statusFilter}
onChange={(event) => onStatusChange(event.target.value)}
>
<option value="all">All Statuses</option>
<option value="todo">To Do</option>
<option value="in progress">In Progress</option>
<option value="done">Done</option>
</select>
);
}

export default IssueStatusFilter;