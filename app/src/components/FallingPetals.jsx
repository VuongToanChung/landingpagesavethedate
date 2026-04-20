import { useEffect, useState } from 'react';

const PETAL_COUNT = 20;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createPetal(id) {
  return {
    id,
    left: randomBetween(0, 100),
    delay: randomBetween(0, 8),
    duration: randomBetween(6, 14),
    size: randomBetween(8, 18),
    drift: randomBetween(-30, 30),
    opacity: randomBetween(0.3, 0.7),
  };
}

export default function FallingPetals() {
  const [petals] = useState(() =>
    Array.from({ length: PETAL_COUNT }, (_, i) => createPetal(i))
  );

  const [show, setShow] = useState(true);

  // Ẩn hiệu ứng sau 15 giây để không gây rối
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal absolute"
          style={{
            left: `${p.left}%`,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
