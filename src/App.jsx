import { Routes, Route } from "react-router";
import IssueTracker from "./components/IssueTracker";
import { ThemeProvider } from "./context/ThemeContext";
import UsersExplorer from "./components/UsersExplorer";
import IssueDetails from "./components/IssueDetails";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/issues" element={<IssueTracker />} />
        <Route path="/issues/:issueId" element={<IssueDetails />} />
      </Routes>

      <UsersExplorer />
    </ThemeProvider>
  );
}

export default App;