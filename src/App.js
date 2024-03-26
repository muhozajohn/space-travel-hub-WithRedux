import RocketsIndex from "./components/features/rocket/rocket";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import ProfilePage from "./components/features/profile/profile";
export default function App() {
  return (
    <div className="flex flex-col gap-5 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketsIndex />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}
