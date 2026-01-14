import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import CoursesHome from "./pages/courses/CoursesHome";
import ShortCourses from "./pages/courses/ShortCourses";
import DiplomaCourses from "./pages/courses/DiplomaCourses";
import SchoolProgram from "./pages/courses/SchoolProgram";
import PricingScreen from "./pages/PricingScreen";
import ContactScreen from "./pages/ContactScreen";
import FaqScreen from "./pages/FaqScreen";
import EnrollmentLayout from "./pages/enrollment/EnrollmentLayout";
import Layout from "./layout/Layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="courses">
            <Route index element={<CoursesHome />} />
            <Route path="short" element={<ShortCourses />} />
            <Route path="diploma" element={<DiplomaCourses />} />
            <Route path="school" element={<SchoolProgram />} />
          </Route>
          <Route path="pricing" element={<PricingScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="faqs" element={<FaqScreen />} />
        </Route>
        <Route path="/enroll" element={<EnrollmentLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
