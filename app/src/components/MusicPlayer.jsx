import { useEffect, useRef, useState } from 'react';

const VIDEO_ID = 'IOe0tNoUGv8';

export default function MusicPlayer() {
  const playerRef = useRef(null);
  const iframeContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [hasManuallyToggled, setHasManuallyToggled] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      // cleanup
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  // Handle browser autoplay policy by waiting for first user interaction
  useEffect(() => {
    if (!isReady || isPlaying || hasManuallyToggled) return;

    const tryAutoPlay = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
      }
    };

    const events = ['click', 'scroll', 'touchstart'];
    events.forEach(e => window.addEventListener(e, tryAutoPlay, { once: true, passive: true }));

    return () => {
      events.forEach(e => window.removeEventListener(e, tryAutoPlay));
    };
  }, [isReady, isPlaying, hasManuallyToggled]);

  function initPlayer() {
    playerRef.current = new window.YT.Player(iframeContainerRef.current, {
      videoId: VIDEO_ID,
      playerVars: {
        autoplay: 1,
        start: 20,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        loop: 1,
        playlist: VIDEO_ID,
      },
      events: {
        onReady: (e) => {
          setIsReady(true);
          e.target.setVolume(60);
          // Try autoplay — may be blocked by browser
          try {
            e.target.playVideo();
            setAttempted(true);
          } catch (_) { }
        },
        onStateChange: (e) => {
          // YT.PlayerState: PLAYING = 1, PAUSED = 2, ENDED = 0
          if (e.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
          } else if (
            e.data === window.YT.PlayerState.PAUSED ||
            e.data === window.YT.PlayerState.ENDED
          ) {
            setIsPlaying(false);
          }
        },
      },
    });
  }

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;
    setHasManuallyToggled(true);
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <>
      {/* Hidden YouTube iframe */}
      <div
        style={{
          position: 'fixed',
          bottom: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          pointerEvents: 'none',
          visibility: 'hidden',
        }}
        aria-hidden="true"
      >
        <div ref={iframeContainerRef} />
      </div>

      {/* Floating Button */}
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
        title={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
        className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-2xl
          transition-all duration-300
          backdrop-blur-sm
          ring-2
          ${isPlaying
            ? 'bg-primary-brand/90 ring-primary-brand/40 hover:bg-primary-brand'
            : 'bg-inverse-surface/80 ring-outline-variant/30 hover:bg-inverse-surface'
          }
        `}
      >
        {isPlaying ? (
          /* Animated equalizer bars */
          <span className="flex items-end gap-[3px] h-5">
            <span className="w-[3px] bg-surface-primary rounded-full" style={{ height: '60%', animation: 'eq1 0.8s ease-in-out infinite alternate' }} />
            <span className="w-[3px] bg-surface-primary rounded-full" style={{ height: '100%', animation: 'eq2 0.6s ease-in-out infinite alternate' }} />
            <span className="w-[3px] bg-surface-primary rounded-full" style={{ height: '40%', animation: 'eq3 1s ease-in-out infinite alternate' }} />
            <span className="w-[3px] bg-surface-primary rounded-full" style={{ height: '80%', animation: 'eq4 0.7s ease-in-out infinite alternate' }} />
          </span>
        ) : (
          /* Pause / music note icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6 text-surface-primary"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes eq1 { from { height: 30% } to { height: 90% } }
        @keyframes eq2 { from { height: 60% } to { height: 20% } }
        @keyframes eq3 { from { height: 80% } to { height: 40% } }
        @keyframes eq4 { from { height: 20% } to { height: 100% } }
      `}</style>
    </>
  );
}
