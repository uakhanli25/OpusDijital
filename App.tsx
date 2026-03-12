
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SekreterAI from './pages/SekreterAI';
import Campaign from './pages/Campaign';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import MatrixPreloader from './components/MatrixPreloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 saniye sürsün

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <Router>
      {loading && <MatrixPreloader duration={3000} />}
      <div className="relative">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paketlerimiz" element={<Packages />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/sekreterai" element={<SekreterAI />} />
            <Route path="/kampanya" element={<Campaign />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
