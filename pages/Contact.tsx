
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formState);
    alert('Mesajınız başarıyla gönderildi! Ekibimiz en kısa sürede sizinle iletişime geçecektir.');
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-24">
      {/* Hero Header */}
      <h1 className="text-4xl md:text-7xl font-logo mb-20 text-gradient reveal uppercase tracking-[0.25em]">İLETİŞİM</h1>
      
      <div className="grid md:grid-cols-2 gap-20">
        {/* Left Side: Contact Info */}
        <div className="reveal">
          <p className="text-2xl md:text-4xl font-logo uppercase tracking-tighter text-gray-200 mb-16 leading-tight">
            BAŞLAMAK İÇİN <br /> HAZIR MISINIZ? <br />
            <span className="text-gradient font-black uppercase">BUGÜN İNŞA EDELİM.</span>
          </p>

          <div className="space-y-12 mb-16">
            <div className="flex items-start space-x-6 group">
              <div className="p-4 glass rounded-2xl text-[#4285F4] group-hover:scale-110 transition-transform duration-300">
                <Phone size={24} />
              </div>
              <div className="flex-grow">
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">TELEFON NUMARALARI</h4>
                <p className="text-xl font-data font-medium text-white hover:text-[#00D4FF] transition-colors tracking-tight">+90 0530 353 36 76</p>
                <p className="text-xl font-data font-medium text-white hover:text-[#00D4FF] transition-colors tracking-tight">+90 0501 569 95 64</p>
                
                {/* WhatsApp Butonu */}
                <a 
                  href="https://wa.me/905303533676" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 mt-4 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-all group/wa"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span className="text-[10px] font-black text-[#25D366] uppercase tracking-[0.2em]">WhatsApp İle Yazın</span>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 glass rounded-2xl text-[#EA4335] group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">E-POSTA ADRESİ</h4>
                <p className="text-xl font-data font-medium text-white hover:text-[#00D4FF] transition-colors tracking-tight">opus.digital25@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 glass rounded-2xl text-[#FBBC05] group-hover:scale-110 transition-transform duration-300">
                <Instagram size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">SOSYAL MEDYA</h4>
                <p className="text-xl font-data font-medium text-white hover:text-[#00D4FF] transition-colors tracking-tight">@opus.dijital</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 glass rounded-2xl text-[#34A853] group-hover:scale-110 transition-transform duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">MERKEZ OFİS</h4>
                <p className="text-xl font-data font-medium text-white tracking-tight">İzmir, Türkiye</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Request Form */}
        <div className="reveal">
          <div className="rotating-border-container rounded-[3rem] p-1 glow-indigo shadow-[0_0_40px_rgba(79,70,229,0.1)]">
            <div className="bg-[#050510] p-8 md:p-12 rounded-[2.9rem] w-full">
              <h3 className="text-2xl font-logo text-gradient uppercase mb-10 tracking-widest">TEKLİF FORMU</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] ml-2">ADINIZ & SOYADINIZ</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#4285F4] transition-colors font-medium"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] ml-2">E-POSTA</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="eposta@sirket.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#EA4335] transition-colors font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] ml-2">TELEFON</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      placeholder="05XX XXX XX XX"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FBBC05] transition-colors font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] ml-2">MESAJINIZ / PROJE DETAYLARI</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Projenizden kısaca bahsedin..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#34A853] transition-colors font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-5 bg-gradient-primary rounded-2xl font-black uppercase tracking-[0.5em] text-[10px] flex items-center justify-center space-x-3 hover:scale-[1.02] transition-transform glow-indigo"
                >
                  <span>MESAJI GÖNDER</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
