import RocketsIndex from "./components/features/rocket/rocket";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import ProfilePage from "./components/features/profile/profile";
import MissionPage from "./components/features/mission/mission";
import { getThemeColor, changeColor } from "./components/features/theme/themeSlice";
import { useSelector, useDispatch } from 'react-redux';

export default function App() {

  const dispatch = useDispatch();
  const bgLight = useSelector(getThemeColor)

  const handleBgColr = (curbg) => {
    return curbg ? "dark:bg-slate-800 dark:text-white" : " "
  }

  const handlebgChange = (bg) => {
    dispatch(changeColor(bg));
  }

  return (
    <div className={` ${handleBgColr(bgLight)} flex flex-col gap-5  `}>
      <Navbar changeBg={handlebgChange} styles={`${handleBgColr(bgLight)} border-b border-gray-300 shadow-md`} />
      <Routes>
        <Route path="/" element={<RocketsIndex changeBg={`${handleBgColr(bgLight)} border border-slate-200 `} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
    </div>
  )
}
