
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      
      {/* Global CTA Section - Talimata uygun Indigo-Cyan gradyan buton */}
      <section className="py-24 px-6 bg-[#08081a]">
        <div className="max-w-5xl mx-auto rotating-border-container rounded-[3rem] p-1 glow-indigo">
          <div className="bg-[#050510] rounded-[2.9rem] p-12 md:p-20 text-center w-full relative z-10 shadow-[0_0_50px_rgba(79,70,229,0.15)]">
            <h2 className="text-3xl md:text-5xl font-logo uppercase tracking-[0.2em] mb-10 text-gradient leading-tight">GELECEĞİNİZİ BİRLİKTE İNŞA EDELİM Mİ?</h2>
            <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">Dijital dünyadaki karmaşayı biz yönetelim, siz sadece büyümenizi izleyin. Profesyonel ekibimiz sizi bekliyor.</p>
            <Link 
              to="/iletisim" 
              className="inline-block px-14 py-6 bg-gradient-primary rounded-full font-black uppercase tracking-[0.4em] text-sm hover:scale-105 transition-transform glow-cyan animate-breathe"
            >
              HEMEN TEKLİF AL
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Layout;
