export default function FamilySection() {
  return (
    <section className="py-20 bg-surface-primary border-t border-outline-variant/10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-xs md:text-sm font-label uppercase tracking-[0.3em] text-outline-variant mb-16">
          Trân Trọng Báo Tin Vui
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-0 w-full relative">

          {/* Nhà Trai */}
          <div className="text-center space-y-6 flex-1 w-full relative z-10 px-4">
            <h3 className="font-headline text-3xl md:text-4xl italic text-primary-brand mb-6">Nhà Trai</h3>
            <div className="font-body text-xl md:text-2xl text-on-surface space-y-3 font-medium">
              <p>Ông: Phạm Văn Thanh</p>
              <p>Bà: Vương Thị Hương</p>
            </div>

            <div className="w-12 h-px bg-primary-brand/30 mx-auto my-8"></div>

            <div className="bg-surface-container py-4 px-6 rounded-md shadow-sm border border-outline-variant/10 inline-block w-full max-w-[280px] min-h-[80px] flex flex-col justify-center">
              <p className="font-label text-[10px] md:text-xs uppercase tracking-[0.25em] text-secondary-brand mb-2">Chú Rể</p>
              <p className="font-headline text-xl text-primary-override font-semibold whitespace-nowrap">Phạm Văn Minh</p>
            </div>

            <p className="font-body text-sm font-light text-on-surface/80 max-w-xs mx-auto mt-4">
              Địa chỉ: thôn Tây Thịnh, Xã Thọ Vinh, Đức Hợp, Hưng Yên
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="hidden md:flex flex-col items-center justify-center opacity-40">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-outline-variant to-transparent"></div>
            <div className="my-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-tertiary-brand">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-outline-variant to-transparent"></div>
          </div>

          {/* Nhà Gái */}
          <div className="text-center space-y-6 flex-1 w-full relative z-10 px-4 mt-12 md:mt-0">
            <h3 className="font-headline text-3xl md:text-4xl italic text-primary-brand mb-6">Nhà Gái</h3>
            <div className="font-body text-xl md:text-2xl text-on-surface space-y-3 font-medium">
              <p> </p>
              <p>Bà: Lê Thị Liên</p>
            </div>

            <div className="w-12 h-px bg-primary-brand/30 mx-auto my-8"></div>

            <div className="bg-surface-container py-4 px-6 rounded-md shadow-sm border border-outline-variant/10 inline-block w-full max-w-[280px] min-h-[80px] flex flex-col justify-center">
              <p className="font-label text-[10px] md:text-xs uppercase tracking-[0.25em] text-secondary-brand mb-2">Cô Dâu</p>
              <p className="font-headline text-xl text-primary-override font-semibold whitespace-nowrap">Phạm Hòa</p>
            </div>

            <p className="font-body text-sm font-light text-on-surface/80 max-w-xs mx-auto mt-4">
              Địa chỉ: thôn Đồng Lí, xã Lương Bằng
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
