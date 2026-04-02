import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar  from './components/navbar.jsx';
import Footer  from './components/footer.jsx';
import Home    from './pages/home.jsx';
import About   from './pages/about.jsx';
import Services from './pages/services.jsx';
import Contact from './pages/contact.jsx';
import Give    from './pages/give.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/give"     element={<Give />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
