
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import Modal from '../components/Modal';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="animate-fade-in max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-7xl font-logo mb-16 text-gradient reveal uppercase tracking-[0.25em]">HİZMETLERİMİZ</h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-24 leading-relaxed reveal font-medium">
        İşletmenizi dijitalde bir dev haline getirecek 360 derece çözümler. 
        <span className="text-gradient font-black"> Teknoloji karmaşasını biz yönetelim, siz büyümeye odaklanın.</span>
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id}
            className="reveal group cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <div className="rotating-border-container rounded-[2.5rem] p-0.5 h-full glow-indigo">
              <div className="bg-[#050510] p-12 rounded-[2.4rem] h-full flex flex-col transition-all duration-500 group-hover:bg-[#0a0a22]">
                <div className="mb-10 text-[#4285F4] transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black mb-8 text-gradient group-hover:scale-[1.02] transition-transform uppercase tracking-[0.2em] leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-10 leading-relaxed font-medium flex-grow">{service.description}</p>
                <div className="flex items-center space-x-3 text-[10px] md:text-xs font-black text-[#FBBC05] uppercase tracking-[0.4em] group-hover:translate-x-3 transition-transform">
                  <span>DETAYLI ÇÖZÜM PLANI</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
        title={selectedService?.title?.toUpperCase() || ''}
      >
        <div className="font-medium text-lg text-gray-300 leading-relaxed whitespace-pre-line">
          {selectedService?.details}
        </div>
      </Modal>
    </div>
  );
};

export default Services;
