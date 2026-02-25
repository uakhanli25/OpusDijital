
import React, { useEffect, useRef } from 'react';

interface MatrixPreloaderProps {
  duration: number;
}

const MatrixPreloader: React.FC<MatrixPreloaderProps> = ({ duration }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas boyutlarını ayarla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix karakterleri
    const matrixChars = "0123456789ABCDEFHIJKLMNOPQRSTUVWXYZ$#@%&*";
    const charArray = matrixChars.split("");
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Her sütun için başlangıç y konumu
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Arka planı hafif şeffaf siyahla boya (iz bırakması için)
      ctx.fillStyle = "rgba(5, 5, 16, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Karakter rengi (Daha koyu Matrix Yeşili)
      ctx.fillStyle = "#008F11";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Ekranın altına ulaştığında veya rastgele bir zamanda başa dön
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#050510] flex items-center justify-center transition-opacity duration-1000 overflow-hidden"
      style={{ animation: `fadeOut 0.5s ease-out ${duration - 500}ms forwards` }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-logo text-google tracking-[0.5em] uppercase animate-pulse">
          OPUS
        </h2>
        <div className="mt-4 text-[#008F11] font-black text-[10px] tracking-[1em] uppercase">
          Sistem Yükleniyor...
        </div>
      </div>
      <style>{`
        @keyframes fadeOut {
          from { opacity: 1; visibility: visible; }
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
};

export default MatrixPreloader;
