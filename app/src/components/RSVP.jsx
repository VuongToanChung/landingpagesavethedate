export default function RSVP() {
  return (
    <section className="py-24 md:py-40 bg-surface-primary relative flex justify-center px-4">
      {/* RSVP Form uses surface-low against surface-primary to build a boundary without lines */}
      <div className="bg-surface-low px-8 py-16 md:p-20 md:w-[600px] shadow-[0_20px_60px_rgba(49,51,47,0.03)] relative z-10 w-full max-w-xl">
        
        <div className="text-center mb-16 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-secondary-brand">Be Our Guest</p>
          <h2 className="text-4xl md:text-5xl font-headline text-on-surface">RSVP</h2>
          <p className="font-body text-sm text-outline-variant tracking-wide">Kindly reply by March 15th, 2026</p>
        </div>

        <form className="space-y-12">
          {/* Input field using "bottom-border-only" spec */}
          <div className="group relative">
            <input 
              type="text" 
              id="fullName"
              placeholder=" "
              className="w-full bg-transparent border-bottom-only pt-4 pb-2 text-on-surface text-lg font-body peer"
            />
            <label htmlFor="fullName" className="absolute left-0 top-4 text-secondary-brand text-xs transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[10px] uppercase tracking-widest pointer-events-none">
              Full Name
            </label>
          </div>

          <div className="group relative">
            <input 
              type="email" 
              id="email"
              placeholder=" "
              className="w-full bg-transparent border-bottom-only pt-4 pb-2 text-on-surface text-lg font-body peer"
            />
            <label htmlFor="email" className="absolute left-0 top-4 text-secondary-brand text-xs transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[10px] uppercase tracking-widest pointer-events-none">
              Email Address
            </label>
          </div>

          <div className="pt-4">
            <p className="text-[10px] uppercase tracking-widest text-secondary-brand mb-6 text-center md:text-left">Will you attend?</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 justify-center md:justify-start">
              
              <label className="flex items-center space-x-3 cursor-pointer group w-fit mx-auto md:mx-0">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <input type="radio" name="attending" className="peer sr-only" value="yes" />
                  <div className="w-5 h-5 rounded-full border border-outline-variant peer-checked:border-primary-brand flex items-center justify-center transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-transparent peer-checked:bg-primary-override transition-colors"></div>
                  </div>
                </div>
                <span className="font-body text-sm text-on-surface peer-checked:text-primary-brand transition-colors">Joyfully Accept</span>
              </label>
              
              <label className="flex items-center space-x-3 cursor-pointer group w-fit mx-auto md:mx-0">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <input type="radio" name="attending" className="peer sr-only" value="no" />
                  <div className="w-5 h-5 rounded-full border border-outline-variant peer-checked:border-primary-brand flex items-center justify-center transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-transparent peer-checked:bg-primary-override transition-colors"></div>
                  </div>
                </div>
                <span className="font-body text-sm text-on-surface peer-checked:text-primary-brand transition-colors">Regretfully Decline</span>
              </label>

            </div>
          </div>

          <div className="pt-8 flex justify-center">
            {/* Primary Button Spec */}
            <button type="button" className="bg-primary-brand text-on-primary px-10 py-4 rounded-[0.375rem] uppercase tracking-widest text-xs font-semibold hover:bg-primary-override transition-colors duration-300 transform active:scale-95 shadow-sm">
              Send Reply
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
