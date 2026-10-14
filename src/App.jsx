import IssueTracker from "./components/IssueTracker";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <IssueTracker />
    </ThemeProvider>
  );
}

export default App;