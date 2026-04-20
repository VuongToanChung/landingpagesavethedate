import useScrollReveal from '../hooks/useScrollReveal';

export default function Hero() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-6 pb-24 px-6 bg-surface-primary">
      {/* Editorial Image Layout */}
      <div className="relative w-full max-w-4xl flex items-center justify-center mt-6 h-[520px] md:h-[950px] mb-8 md:mb-16 overflow-visible">
        
        {/* Primary Image (Background) */}
        <div className="absolute left-[5%] md:left-[18%] top-0 w-[60%] md:w-[40%] aspect-[4/5] z-0 -rotate-3 shadow-2xl overflow-hidden rounded-md ring-8 ring-surface-primary">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            style={{ imageRendering: 'high-quality' }}
            alt="Wedding Background"
            src="/header/header_1.jpg"
            fetchPriority="high"
            decoding="sync"
          />
        </div>

        {/* Secondary Image — closer overlap on PC, fully visible on mobile */}
        <div className="absolute left-[35%] md:left-[42%] top-[35%] md:top-[55%] w-[50%] md:w-[38%] aspect-[4/5] z-10 rotate-[5deg] shadow-2xl overflow-hidden rounded-md ring-8 ring-surface-primary">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
            style={{ imageRendering: 'high-quality' }}
            alt="Wedding Foreground"
            src="/header/header_2.jpg"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
      </div>
      
      <div
        ref={textRef}
        className={`text-center max-w-2xl px-4 z-20 mt-4 md:mt-12 transition-all duration-1000 ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary-brand mb-6 block">Save the Date</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline text-primary-brand mb-8 leading-tight">
          Phạm Minh <span className="text-3xl md:text-5xl align-middle mx-2 font-light text-tertiary-brand italic">&</span> Phạm Hòa
        </h1>
        <p className="text-lg md:text-xl text-on-surface/80 font-light tracking-wide leading-relaxed font-body">
          Sự hiện diện của bạn là lời chúc phúc quý giá nhất cho khởi đầu hạnh phúc của chúng tôi!
        </p>
      </div>
    </header>
  );
}
