export default function Story() {
  return (
    <section className="py-24 md:py-40 bg-surface-container relative">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Story Text */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-8">
          <h2 className="text-4xl md:text-5xl font-headline text-on-surface relative inline-block">
            Our <span className="text-primary-override italic">Story</span>
            {/* Minimal left border accent instead of solid lines */}
            <div className="absolute -left-8 top-1 bottom-1 w-[2px] bg-primary-container hidden md:block"></div>
          </h2>
          
          <div className="space-y-6 font-body text-secondary-brand leading-loose text-base md:text-lg">
            <p>
              It began with a chance encounter in a little café, where two cups of black coffee paved the way to an endless conversation. We've traveled the world, supported each other through life's biggest milestones, and learned that love isn't just a feeling, it's a home.
            </p>
            <p>
              We cannot wait to celebrate the beginning of our next chapter with the people who mean the most to us. Join us as we say <i>"I do"</i> on a spectacular spring evening in the heart of the city.
            </p>
          </div>
          
          <div className="pt-8">
            <span className="font-headline text-3xl text-primary-brand/60 italic signature-like">E & J</span>
          </div>
        </div>
        
        {/* Story Image / Memory Gallery Asymmetric Element */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:translate-x-10">
            {/* Background offset card to add depth without heavy shadows */}
            <div className="absolute inset-0 bg-surface-primary rounded-[0.125rem] shadow-sm transform translate-x-6 translate-y-6"></div>
            <img 
              src="/hero_image.jpg" 
              alt="Memory" 
              className="w-full h-full object-cover object-top rounded-[0.125rem] relative z-10 sepia-[0.3] hover:sepia-0 transition-all duration-700" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
