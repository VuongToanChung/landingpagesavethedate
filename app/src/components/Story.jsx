import useScrollReveal from '../hooks/useScrollReveal';

const milestones = [
  {
    date: 'Tháng 9, 2019',
    title: 'Lần Đầu Gặp Gỡ',
    description:
      'Một buổi chiều thu tình cờ, hai người gặp nhau qua một người bạn chung. Cuộc trò chuyện đầu tiên kéo dài mãi không muốn dừng — như thể đã quen nhau từ rất lâu.',
    image: '/slide/DSC02922ok.jpg',
  },
  {
    date: 'Tháng 12, 2019',
    title: 'Chính Thức Yêu Nhau',
    description:
      'Sau ba tháng nhắn tin mỗi ngày và những buổi hẹn cà phê cuối tuần, Minh đã nói lời tỏ tình dưới hàng cây bàng lá đỏ. Câu trả lời là một nụ cười và cái gật đầu nhẹ.',
    image: '/slide/DSC02974ok.jpg',
  },
  {
    date: 'Năm 2020 – 2023',
    title: 'Cùng Nhau Trưởng Thành',
    description:
      'Yêu xa, yêu gần, cùng vượt qua những ngày giãn cách. Mỗi cuộc gọi video đêm khuya, mỗi chuyến xe về quê cuối tuần đều là minh chứng cho tình yêu bền bỉ.',
    image: '/slide/DSC03043ok.jpg',
  },
  {
    date: 'Tháng 2, 2025',
    title: 'Lời Cầu Hôn',
    description:
      'Trong một buổi tối giản dị nhưng đầy xúc động, Minh đã quỳ gối và hỏi: "Em có muốn cùng anh đi hết cuộc đời này không?" Hòa đã khóc và nói "Có".',
    image: '/slide/DSC03350ok.jpg',
  },
  {
    date: '02 Tháng 05, 2026',
    title: 'Về Chung Một Nhà',
    description:
      'Và giờ đây, chúng tôi sẵn sàng bước vào chương mới đẹp nhất — cùng nhau xây dựng một mái ấm, một gia đình nhỏ tràn ngập yêu thương.',
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
            Chuyện Của Chúng Mình
          </span>
          <h2 className="text-4xl md:text-5xl font-headline italic text-primary-brand relative inline-block">
            Hành Trình Yêu Thương
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
