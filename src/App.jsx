import IssueTracker from "./components/IssueTracker";
import { ThemeProvider } from "./context/ThemeContext";
import UsersExplorer from "./components/UsersExplorer";

function App() {
  return (
    <ThemeProvider>
      <IssueTracker />
      <UsersExplorer />
    </ThemeProvider>
  );
}

export default App;