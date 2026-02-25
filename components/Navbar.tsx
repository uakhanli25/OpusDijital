
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Paketlerimiz', path: '/paketlerimiz' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'SekreterAI', path: '/sekreterai' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex flex-col group relative">
          <span className="text-xl md:text-2xl font-logo tracking-tighter text-google uppercase leading-none transition-transform group-hover:scale-[1.02]">
            OPUS DİJİTAL
          </span>
          <div className="rotating-line-wrapper rotating-line-google mt-1.5 h-[1.5px] w-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const active = isLinkActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 group overflow-hidden ${
                  active ? '' : 'hover:bg-white/5'
                }`}
              >
                <span className={`relative z-10 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  active ? 'text-google scale-110' : 'text-gray-400 group-hover:text-google'
                }`}>
                  {link.name}
                </span>
                
                <div className={`absolute bottom-0 left-0 w-full transition-all duration-300 ${
                  active ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}>
                  <div className="rotating-line-wrapper rotating-line-google h-[1.5px]"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white p-2 glass rounded-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050510]/95 backdrop-blur-xl border-b border-white/10 p-8 space-y-6 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-xl font-bold uppercase tracking-widest transition-all ${
                isLinkActive(link.path) ? 'text-google translate-x-4' : 'text-gray-400'
              }`}
            >
              {link.name}
              <div className="rotating-line-wrapper rotating-line-google h-[1px] mt-3 opacity-20"></div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
