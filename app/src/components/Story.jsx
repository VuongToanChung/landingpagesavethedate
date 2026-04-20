import useScrollReveal from '../hooks/useScrollReveal';

const milestones = [
  {
    date: 'September, 2019',
    title: 'First Meeting',
    description:
      'On a random autumn afternoon, we met through a mutual friend. Our first conversation went on for hours — as if we had known each other for a lifetime.',
    image: '/slide/DSC02922ok.jpg',
  },
  {
    date: 'December, 2019',
    title: 'Officially Together',
    description:
      'After three months of daily texts and weekend coffee dates, Minh confessed his feelings under the red autumn leaves. The answer was a gentle smile and a soft nod.',
    image: '/slide/DSC02974ok.jpg',
  },
  {
    date: '2020 – 2023',
    title: 'Growing Together',
    description:
      'Through long distance and lockdowns, we stood by each other. Every late-night video call, every weekend trip home was proof that our love could endure anything.',
    image: '/slide/DSC03043ok.jpg',
  },
  {
    date: 'February, 2025',
    title: 'The Proposal',
    description:
      'On a simple yet deeply emotional evening, Minh got down on one knee and asked: "Will you spend the rest of your life with me?" Hoa cried and said "Yes."',
    image: '/slide/DSC03350ok.jpg',
  },
  {
    date: 'May 02, 2026',
    title: 'Becoming One',
    description:
      'And now, we are ready to begin the most beautiful chapter — building a home, a little family filled with love and warmth.',
    image: '/slide/DSC03602ok.jpg',
  },
];

function MilestoneItem({ milestone, index }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center justify-between group ${
        isEven ? '' : 'md:flex-row-reverse'
      } transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-surface-primary border-2 border-primary-brand z-10 group-hover:scale-110 transition-transform">
        <div className="w-2.5 h-2.5 bg-primary-override rounded-full" />
      </div>

      {/* Image side */}
      <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md ring-1 ring-outline-variant/10">
          <img
            src={milestone.image}
            alt={milestone.title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text side */}
      <div
        className={`w-full md:w-5/12 pl-16 mt-4 md:mt-0 ${
          isEven ? 'md:pl-12 md:text-left' : 'md:pl-0 md:pr-12 md:text-right'
        }`}
      >
        <span className="font-label text-sm tracking-widest text-primary-brand font-bold mb-2 block uppercase">
          {milestone.date}
        </span>
        <h4 className="text-2xl md:text-3xl font-headline mb-3 text-on-surface">
          {milestone.title}
        </h4>
        <p className="text-base text-on-surface/80 font-light font-body leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  );
}

export default function Story() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-surface-container border-t border-outline-variant/10">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-20 relative transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-label text-xs md:text-sm tracking-[0.4em] uppercase text-secondary-brand block mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-headline italic text-primary-brand relative inline-block">
            A Journey of Love
          </h2>
          <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-12 h-1 bg-outline-variant/20 rounded-full" />
        </div>

        <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:-translate-x-px md:before:w-0.5 before:w-px before:h-[95%] before:bg-gradient-to-b before:from-primary-brand/50 before:via-outline-variant/30 before:to-transparent">
          {milestones.map((m, i) => (
            <MilestoneItem key={m.title} milestone={m} index={i} />
          ))}
        </div>

        {/* Closing signature */}
        <div className="text-center mt-20">
          <span className="font-headline text-3xl text-primary-brand/60 italic">
            Minh & Hòa
          </span>
        </div>
      </div>
    </section>
  );
}
