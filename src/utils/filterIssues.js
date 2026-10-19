export function filterIssues(issues, searchTerm, statusFilter) {
return issues.filter((issue) => {
const matchesSearch = issue.title
.toLowerCase()
.includes(searchTerm.toLowerCase());

const matchesStatus =
  statusFilter === "all" || issue.status === statusFilter;
return matchesSearch && matchesStatus;

});
}