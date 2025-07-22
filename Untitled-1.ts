// Root React project structure with TailwindCSS and basic routing
// We'll start with basic pages: Login, Signup, Dashboard (Chat), and Profile
// Directory: /src

// File: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// File: src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;

// File: src/pages/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;

// File: src/pages/Signup.jsx
import React from "react";

const Signup = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;

// File: src/pages/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="p-4 bg-blue-700 text-white text-lg font-semibold">
        ChatterBox
      </header>
      <main className="flex flex-1">
        <aside className="w-1/4 bg-white border-r p-4">Chat List (Coming Soon)</aside>
        <section className="flex-1 p-4">Chat Area (Coming Soon)</section>
      </main>
    </div>
  );
};

export default Dashboard;

// File: src/pages/Profile.jsx
import React from "react";

const Profile = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Profile Page</h2>
        <p className="text-gray-600">Feature to update profile coming soon.</p>
      </div>
    </div>
  );
};

export default Profile;

// File: src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
