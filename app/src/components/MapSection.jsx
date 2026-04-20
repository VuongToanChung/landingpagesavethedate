import useScrollReveal from '../hooks/useScrollReveal';

const venues = [
  {
    label: 'Nhà Trai',
    name: 'Lễ Thành Hôn',
    address: 'Thôn Tây Thịnh, Xã Thọ Vinh, Đức Hợp, Hưng Yên',
    mapQuery: 'Thọ Vinh, Kim Động, Hưng Yên',
  },
  {
    label: 'Nhà Gái',
    name: 'Lễ Ăn Hỏi',
    address: 'Thôn Đồng Lí, Xã Lương Bằng',
    mapQuery: 'Lương Bằng, Kim Động, Hưng Yên',
  },
];

function VenueCard({ venue, index }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`flex flex-col transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="mb-4 text-center">
        <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary-brand block mb-1">
          {venue.label}
        </span>
        <h3 className="font-headline text-2xl text-on-surface">{venue.name}</h3>
        <p className="font-body text-sm text-on-surface/60 mt-1">{venue.address}</p>
      </div>

      <div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-outline-variant/15 shadow-md">
        <iframe
          title={`Bản đồ ${venue.name}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(venue.mapQuery)}&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapQuery)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-center inline-flex items-center gap-2 px-5 py-2.5 bg-primary-brand text-surface-primary font-label text-xs tracking-widest uppercase rounded-full hover:shadow-lg transition-shadow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        Chỉ đường
      </a>
    </div>
  );
}

export default function MapSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-label text-xs md:text-sm tracking-[0.4em] uppercase text-secondary-brand block mb-4">
            Địa Điểm Tổ Chức
          </span>
          <h2 className="text-4xl md:text-5xl font-headline italic text-primary-brand">
            Đường Đến Hạnh Phúc
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {venues.map((venue, i) => (
            <VenueCard key={venue.label} venue={venue} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
