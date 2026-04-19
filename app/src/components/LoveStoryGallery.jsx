import { useState, useEffect, useRef, useCallback } from 'react';

const slideImages = [
  "/slide/DSC02922ok.jpg",
  "/slide/DSC02940ok.jpg",
  "/slide/DSC02974ok.jpg",
  "/slide/DSC03020okkk.jpg",
  "/slide/DSC03030ok.jpg",
  "/slide/DSC03043ok.jpg",
  "/slide/DSC03046okok.jpg",
  "/slide/DSC03066ok.jpg",
  "/slide/DSC03071okk.jpg",
  "/slide/DSC03138okk.jpg",
  "/slide/DSC03242ok.jpg",
  "/slide/DSC03350ok.jpg",
  "/slide/DSC03481ok.jpg",
  "/slide/DSC03540ok.jpg",
  "/slide/DSC03602ok.jpg",
];

const INTERVAL = 5000;

export default function LoveStoryGallery() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Touch/swipe state
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slideImages.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = useCallback((index) => {
    setCurrent(index);
    startTimer();
  }, [startTimer]);

  const next = useCallback(() => goTo((current + 1) % slideImages.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slideImages.length) % slideImages.length), [current, goTo]);

  // Touch handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    // Only trigger if horizontal swipe dominates (avoid interfering with scroll)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section className="py-24 bg-surface-primary overflow-hidden border-t border-outline-variant/10">
      <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
        <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary-brand block mb-4">Lời Lưu Bút</span>
        <h2 className="text-4xl md:text-5xl font-headline italic text-primary-brand">Câu Chuyện Tình Yêu</h2>
      </div>

      {/* Slideshow */}
      <div className="relative w-full max-w-2xl mx-auto px-6">
        {/* Main image — touch-enabled */}
        <div
          className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-outline-variant/10 bg-surface-container-low select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slideImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Love Story ${i + 1}`}
              decoding="async"
              style={{ imageRendering: 'high-quality' }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}

          {/* Gradient overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-20" />

          {/* Counter */}
          <div className="absolute bottom-4 right-4 bg-black/40 text-white text-xs font-label px-3 py-1 rounded-full tracking-wider backdrop-blur-sm z-30">
            {current + 1} / {slideImages.length}
          </div>

          {/* Swipe hint — shown only on first view */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/60 text-xs font-label z-30 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Vuốt</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-6 flex-wrap">
          {slideImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ảnh ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-primary-brand'
                  : 'w-2 h-2 bg-outline-variant/40 hover:bg-outline-variant'
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-0.5 bg-outline-variant/20 rounded-full overflow-hidden">
          <div
            key={current}
            className="h-full bg-primary-brand/60 rounded-full"
            style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
          />
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </section>
  );
}
