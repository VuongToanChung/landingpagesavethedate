export default function CalendarSection() {
  const days = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  // May 2026 starts on Friday (Index 5 in CSS/JS days, or 6th element)
  const emptyCells = Array(5).fill(null);
  const totalDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section className="py-24 bg-surface-container-low" id="calendar">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-headline italic text-primary-brand mb-8 text-center md:text-left">Tháng 5, 2026</h2>

          <div className="grid grid-cols-7 gap-2 text-center font-label text-xs md:text-sm tracking-widest text-secondary-brand border-b border-outline-variant/20 pb-4 mb-4">
            {days.map(day => <span key={day}>{day}</span>)}
          </div>

          <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center font-body text-base text-on-surface/70">
            {emptyCells.map((_, i) => <span key={`empty-${i}`}></span>)}
            {totalDays.map(day => (
              <span
                key={day}
                className={`py-2 flex items-center justify-center
                  ${day === 2 ? 'font-bold text-primary-brand ring-1 ring-primary-brand/30 rounded-full bg-primary-container/30 text-lg w-10 h-10 mx-auto' : ''}`}
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center gap-6 text-primary-brand justify-center md:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 opacity-80">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <div>
              <p className="font-label text-xs tracking-[0.2em] uppercase text-secondary-brand mb-1">Thứ Bảy</p>
              <p className="text-2xl font-headline text-on-surface">2 Tháng 5, 2026</p>
            </div>
          </div>

          <p className="text-on-surface/70 font-light italic leading-relaxed text-center md:text-left text-lg font-headline px-4 md:px-0">
            "Chỉ cần đó là người mình thương, thì đi đến chân trời góc bể cũng là nhà."
          </p>
        </div>

      </div>
    </section>
  );
}
