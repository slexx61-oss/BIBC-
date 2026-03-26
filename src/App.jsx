import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Services from "./pages/services.jsx";
import Contact from "./pages/contact.jsx";
import Give from "./pages/give.jsx";
import Footer from "./components/footer.jsx";

{ /* */}
function App() {
  return (
    <>
      {/*This is the navigation bar */}
      <Navbar />
      {/*This is the main content area that expands using flex:1 */}
      <main className="container">
        {/*This is where my page routes go */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/give" element={<Give />} />
        </Routes>
      </main>
      {/*This is the footer of my page */}
      <Footer />
    </>
  );
}

export default App;
