import { useState } from 'react';
import Countdown from './Countdown';

function QRCard({ src, alt, title, bank, name, filename }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (e) {
      // fallback: open in new tab
      window.open(src, '_blank');
    }
  };

  return (
    <div className="flex flex-col items-center bg-surface-container-low p-6 rounded-xl ring-1 ring-outline-variant/15 shadow-sm transform hover:-translate-y-2 transition-transform duration-500">
      {/* QR image wrapper with download button */}
      <div className="relative w-56 h-56 mb-6">
        <div className="w-full h-full p-2 rounded-lg shadow-inner overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Download button — top right corner */}
        <button
          onClick={handleDownload}
          aria-label={`Tải QR ${title}`}
          title="Tải ảnh QR về máy"
          className={`
            absolute -top-2 -right-2
            w-8 h-8 rounded-full
            flex items-center justify-center
            shadow-md ring-1
            transition-all duration-300
            ${downloaded
              ? 'bg-green-500 ring-green-400/40 scale-110'
              : 'bg-primary-brand ring-primary-brand/30 hover:scale-110 hover:shadow-lg'
            }
          `}
        >
          {downloaded ? (
            /* Checkmark */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            /* Download arrow */
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          )}
        </button>
      </div>

      <h4 className="font-headline font-semibold text-xl mb-1 text-on-surface">{title}</h4>
      <p className="font-body text-xs text-secondary-brand whitespace-nowrap">{bank}</p>
      <p className="font-body text-xs font-semibold mt-1 text-on-surface">{name}</p>
    </div>
  );
}

export default function CountdownQR() {
  return (
    <section className="py-24 px-6 flex flex-col items-center bg-inverse-surface text-surface-primary rounded-t-[2.5rem] mt-[-2rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
      
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-screen flex items-center justify-center">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" className="text-primary-container">
          <path d="M50 85 C50 85 20 60 20 35 A20 20 0 0 1 50 25 A20 20 0 0 1 80 35 C80 60 50 85 50 85 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <span className="font-label text-xs tracking-[0.4em] uppercase text-outline-variant mb-4 opacity-70">Đếm ngược thời gian</span>
        <h2 className="text-4xl md:text-5xl font-headline italic mb-16 text-primary-container text-center">
          Khoảnh Khắc Trọng Đại
        </h2>
        
        <div className="w-full mb-28 flex justify-center">
          <Countdown />
        </div>
        
        <div className="w-full max-w-4xl bg-surface-primary text-on-surface p-8 md:p-16 rounded-[1rem] flex flex-col items-center shadow-2xl relative">
          <div className="absolute -top-5 bg-gradient-to-r from-primary-brand to-primary-override text-surface-primary px-8 py-2.5 font-label uppercase tracking-[0.25em] text-xs rounded-full shadow-lg">
            Hộp Thư Yêu Thương
          </div>

          <div className="text-center max-w-lg mb-12 mt-6">
            <h3 className="text-2xl font-headline text-on-surface mb-4">Gửi Gắm Tình Cảm</h3>
            <p className="text-base text-secondary-brand font-light font-body leading-relaxed">
              Sự hiện diện của bạn là món quà vô giá.{"\n"}
              Tuy nhiên, nếu bạn ở xa không thể tham dự, bạn có thể gửi quà mừng cưới cho cô dâu và chú rể qua cổng thông tin dưới đây. Xin chân thành cảm ơn!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full px-4 md:px-12">
            <QRCard
              src="/qr/minh_qr.jpg"
              alt="QR Mừng cưới Chú Rể"
              title="Mừng cưới Chú Rể"
              bank="Ngân hàng TPBank - 04102677801"
              name="PHẠM VĂN MINH"
              filename="QR_MungCuoi_ChuRe_PhamVanMinh.jpg"
            />
            <QRCard
              src="/qr/hoa_qr.jpg"
              alt="QR Mừng cưới Cô Dâu"
              title="Mừng cưới Cô Dâu"
              bank="Ngân hàng MB - 8910122801243"
              name="PHẠM THỊ HÒA"
              filename="QR_MungCuoi_CoDau_PhamThiHoa.jpg"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
