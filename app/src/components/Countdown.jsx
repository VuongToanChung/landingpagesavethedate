import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-02T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center gap-4 md:gap-10 select-none text-surface-primary">
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-headline mb-2">{timeLeft.days}</div>
        <div className="text-[10px] font-label tracking-[0.3em] uppercase text-outline-variant">Ngày</div>
      </div>
      <div className="text-4xl md:text-6xl font-headline opacity-30 pb-4">:</div>
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-headline mb-2 text-primary-override">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-[10px] font-label tracking-[0.3em] uppercase text-outline-variant">Giờ</div>
      </div>
      <div className="text-4xl md:text-6xl font-headline opacity-30 pb-4">:</div>
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-headline mb-2 text-primary-override">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-[10px] font-label tracking-[0.3em] uppercase text-outline-variant">Phút</div>
      </div>
      <div className="text-4xl md:text-6xl font-headline opacity-30 pb-4">:</div>
      <div className="text-center">
        <div className="text-5xl md:text-7xl font-headline mb-2 text-primary-override">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-[10px] font-label tracking-[0.3em] uppercase text-outline-variant">Giây</div>
      </div>
    </div>
  );
}
