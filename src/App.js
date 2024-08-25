import "./App.css";
import Dashboard from "./components/Dashboard";
import FeedbackForm from "./components/FormSideBar";
import Navbar from "./components/Navbar";
import NewFormDashboard from "./components/NewFormDashBoard";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Dashboard /> */}
      <NewFormDashboard />
    </div>
  );
}

export default App;
