import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import VoiceOfLionPage from "./pages/VoiceOfLionPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/voiceoflion" element={<VoiceOfLionPage />} />
    </Routes>
  );
}

export default Router;
