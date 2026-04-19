export default function VenueSchedule() {
  return (
    <section className="py-24 md:py-32 bg-surface-primary border-t border-outline-variant/10">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-20 relative">
          <span className="font-label text-xs md:text-sm tracking-[0.4em] uppercase text-secondary-brand block mb-4">Timeline Sự Kiện</span>
          <h2 className="text-4xl md:text-5xl font-headline italic text-primary-brand relative inline-block">
            Lịch Trình Chi Tiết
          </h2>
          <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-12 h-1 bg-outline-variant/20 rounded-full"></div>
        </div>

        <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:-translate-x-px md:before:w-0.5 before:w-px before:h-[95%] before:bg-gradient-to-b before:from-primary-brand/50 before:via-outline-variant/30 before:to-transparent">

          {/* Lễ Ăn Hỏi */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            {/* Timeline dot */}
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-surface-primary border-2 border-primary-brand z-10 group-hover:scale-110 transition-transform">
              <div className="w-2.5 h-2.5 bg-primary-override rounded-full" />
            </div>

            <div className="w-full md:w-5/12 pl-16 md:pl-0 md:text-right md:pr-12">
              <span className="font-label text-sm tracking-widest text-primary-brand font-bold mb-2 block uppercase">01 Tháng 05, 2026</span>
              <h4 className="text-3xl font-headline mb-3 text-on-surface">Lễ Ăn Hỏi</h4>
            </div>

            <div className="w-full md:w-5/12 pl-16 md:pl-12 mt-3 md:mt-0">
              <div className="bg-surface-container-low p-6 rounded-lg ring-1 ring-outline-variant/10 shadow-sm relative hover:shadow-md transition-shadow">
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-surface-container-low rotate-45 border-l border-b border-outline-variant/10 hidden md:block"></div>
                <p className="text-base text-on-surface/80 font-light font-body leading-relaxed">
                  Nghi thức trao tráp và gặp gỡ giữa hai gia đình. Buổi lễ sẽ diễn ra ấm cúng tại tư gia nhà gái vào buổi sáng.
                </p>
              </div>
            </div>
          </div>

          {/* Lễ Thành Hôn */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
            {/* Timeline dot */}
            <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-surface-primary border-2 border-primary-brand z-10 group-hover:scale-110 transition-transform">
              <div className="w-2.5 h-2.5 bg-primary-override rounded-full" />
            </div>

            <div className="w-full md:w-5/12 pl-16 md:pl-0 md:text-left md:pl-12">
              <span className="font-label text-sm tracking-widest text-primary-brand font-bold mb-2 block uppercase">02 Tháng 05, 2026</span>
              <h4 className="text-3xl font-headline mb-3 text-on-surface">Lễ Thành Hôn</h4>
            </div>

            <div className="w-full md:w-5/12 pl-16 md:pl-0 mt-3 md:mt-0 md:pr-12 md:text-left">
              <div className="bg-surface-container-low p-6 rounded-lg ring-1 ring-outline-variant/10 shadow-sm relative hover:shadow-md transition-shadow">
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-surface-container-low rotate-45 border-r border-t border-outline-variant/10 hidden md:block"></div>
                <p className="text-base text-on-surface/80 font-light font-body leading-relaxed">
                  Tiệc báo hỷ và nghi thức trao nhẫn chính thức. Kính mời quý khách đến dự lúc 12h30 tại nhà trai.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
