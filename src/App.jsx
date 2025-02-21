// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Crypto from './pages/Crypto';
import MyCat from './pages/MyCat';
import PDFViewer from './components/PDFViewer';
import FlowDemo from './components/FlowDemo';

// Import fonts
import '@fontsource/roboto';
// Note: Sincopa font would need to be imported from its source

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1E1E1E] text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/cat" element={<MyCat />} />
            <Route path="/paper/:id" element={<PDFViewer />} />
            <Route path="/flow-demo" element={<FlowDemo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;