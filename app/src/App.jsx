import Hero from './components/Hero';
import CalendarSection from './components/CalendarSection';
import FamilySection from './components/FamilySection';
import VenueSchedule from './components/VenueSchedule';
import Story from './components/Story';
import LoveStoryGallery from './components/LoveStoryGallery';
import MapSection from './components/MapSection';
import CountdownQR from './components/CountdownQR';
import MusicPlayer from './components/MusicPlayer';
import FallingPetals from './components/FallingPetals';

function App() {
  return (
    <main className="min-h-screen bg-surface-primary selection:bg-primary-container selection:text-primary-brand w-full overflow-x-hidden">
      <FallingPetals />
      <Hero />
      <CalendarSection />
      <FamilySection />
      <VenueSchedule />
      <Story />
      <LoveStoryGallery />
      <MapSection />
      <CountdownQR />

      {/* Footer */}
      <footer className="footer bg-inverse-surface text-surface-primary pt-24 pb-12 text-center flex flex-col items-center select-none -mt-4">
        <h3 className="font-headline text-3xl mb-4 italic text-outline-variant/60">Minh & Hòa</h3>
        <p className="font-body text-[10px] uppercase tracking-[0.4em] opacity-40">Hân Hạnh Đón Tiếp</p>
        <div className="mt-8 w-8 h-8 rounded-full border border-outline-variant/20 flex items-center justify-center opacity-30">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
      </footer>
      <MusicPlayer />
    </main>
  );
}

export default App;
