import { Route, Routes } from "react-router-dom"
import Navbar from "./Pages/Layout/Navbar"
import Settings from "./Pages/Settings/settings"
import Sidebar from "./Pages/Layout/Sidebar"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Navbar />
        <Routes>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
