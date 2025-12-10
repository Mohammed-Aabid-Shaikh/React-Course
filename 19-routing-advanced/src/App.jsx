import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import CoursesDetail from "./pages/CoursesDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        {/* Dynamic Routing */}
        <Route path='/courses/:id' element={<CoursesDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Nested Routing */}
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
