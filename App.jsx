import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Onboarding from "./components/Onboarding/Onboarding";

function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome, {userData.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="p-4 bg-gray-800 text-white rounded shadow">Team Members: 10</div>
        <div className="p-4 bg-gray-800 text-white rounded shadow">Active Projects: 5</div>
        <div className="p-4 bg-gray-800 text-white rounded shadow">Notifications: 3</div>
      </div>
    </div>
  );
}

function App() {
  const [onboarded, setOnboarded] = useState(() => {
    return !!localStorage.getItem("userData");
  });

  return (
    <Routes>
      <Route path="/" element={onboarded ? <Dashboard /> : <Onboarding setOnboarded={setOnboarded} />} />
    </Routes>
  );
}

export default App;