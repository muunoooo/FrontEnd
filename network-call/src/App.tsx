import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/navbar";
import DetailUserPage from "./pages/DetailUserPage";

function App() {
  return (
    <div className="w-full h-[100vh] bg-black">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/:id" element={<DetailUserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
