# 📋 Progress — Wedding Landing Page (Save The Date)

> Cập nhật lần cuối: 18/04/2026

---

## ✅ Đã Hoàn Thành

### Cấu trúc & Công nghệ
- [x] Khởi tạo dự án với **Vite + React + Tailwind CSS V4**
- [x] Cấu hình font Google Fonts: **Noto Serif** (Headline) + **Plus Jakarta Sans** (Body)
- [x] Thiết lập Design System theo chuẩn **"Modern Heirloom"** từ Stitch project
- [x] CSS Variables với `@theme` Tailwind V4 (surface-primary, primary-brand, v.v.)
- [x] File `DESIGN.md` tổng hợp bảng màu, kiểu chữ

### Các Section đã xây dựng

#### 1. Hero Section (`Hero.jsx`)
- [x] Layout 2 ảnh xếp chéo chồng khối, xoay nghiêng (-3° và +5°)
- [x] Tiêu đề lớn: **Phạm Minh & Phạm Hòa**
- [x] Đoạn mô tả lời mời tiếng Việt có dấu
- [x] Fix: ảnh thứ hai không bị crop góc phải trên Mobile (bỏ `overflow-hidden` trên header)
- [x] Fix: khoảng cách giữa ảnh và text "Save The Date" không còn quá xa

#### 2. Calendar Section (`CalendarSection.jsx`)
- [x] Lịch tháng 5/2026 hiển thị đúng thứ tự ngày
- [x] Ngày 01/05 được **khoanh tròn** bằng vòng tròn màu vàng nổi bật

#### 3. Family Section (`FamilySection.jsx`)
- [x] Nhà Trai & Nhà Gái dàn ngang song song, cân xứng
- [x] Thông tin: Ông Phạm Văn Thanh, Bà Vương Thị Hương
- [x] Thông tin: Ông Nguyễn A, Bà Trần C
- [x] Chú Rể: **Phạm Văn Minh** | Cô Dâu: **Phạm Hòa**
- [x] Địa chỉ nằm bên dưới tên chú rể / cô dâu (placeholder, cần điền thật)

#### 4. Timeline Section (`VenueSchedule.jsx`)
- [x] **30/04/2026** — Lễ Ăn Hỏi (kèm mô tả)
- [x] **01/05/2026** — Lễ Thành Hôn (kèm mô tả)
- [x] Dạng timeline dọc zigzag (trái/phải xen kẽ)

#### 5. Love Story Gallery (`LoveStoryGallery.jsx`)
- [x] Slide ảnh vuốt ngang (horizontal scroll snap)
- [x] Full-width trên mobile, thu nhỏ hợp lý trên desktop
- [x] Gợi ý "Vuốt để xem thêm" với icon animated
- [x] Fix: bỏ `touch-pan-x` để không chặn cuộn trang dọc trên mobile

#### 6. Countdown + QR Section (`CountdownQR.jsx`)
- [x] Đồng hồ đếm ngược thời gian thực đến 01/05/2026
- [x] 2 khối QR song song: **Mừng cưới Chú Rể** và **Mừng cưới Cô Dâu**
- [x] Tên chủ tài khoản: PHẠM VĂN MINH / PHẠM HÒA

#### 7. Footer
- [x] Hiển thị tên cặp đôi: **Minh & Hòa**
- [x] Dòng chú thích "Hân Hạnh Đón Tiếp"

---

## ⚠️ Còn Tồn Tại / Cần Cập Nhật

### Nội dung placeholder — cần điền thật
- [ ] **Địa chỉ Nhà Trai**: Xóm 1, Xã ABC, Huyện XYZ, Tỉnh Thái Bình → thay bằng địa chỉ thực
- [ ] **Địa chỉ Nhà Gái**: Số 123, Đường QWERTY, Quận Ba Đình, TP Hà Nội → thay bằng địa chỉ thực
- [ ] **Tên Nhà Gái (Ông, Bà)**: Nguyễn A, Trần C → thay bằng tên thực
- [ ] **Số tài khoản ngân hàng Chú Rể**: Ngân hàng ABC - 123456789 → thay thực
- [ ] **Số tài khoản ngân hàng Cô Dâu**: Ngân hàng XYZ - 987654321 → thay thực
- [ ] **QR code thực tế**: Thay thế icon SVG placeholder bằng ảnh QR thật từ app ngân hàng
- [ ] **Ảnh cưới thực tế**: Thay file `/public/hero_image.jpg` bằng các ảnh chụp thật của cặp đôi
- [ ] **Mô tả Lễ Ăn Hỏi & Lễ Thành Hôn**: Thêm nội dung chi tiết (địa điểm, giờ giấc)

### Tính năng / Giao diện
- [ ] **Hero PC spacing**: Khoảng trắng bên phải của hai ảnh (50% màn hình trống) — có thể bổ sung text/quote trang trí bên phải để lấp đầy
- [ ] **Love Story Gallery**: Hiện dùng cùng 1 ảnh lặp lại — cần thêm nhiều ảnh khác nhau vào `/public/`
- [ ] **Timeline mô tả**: Text mô tả lễ còn là placeholder — cần viết nội dung tiếng Việt cụ thể
- [ ] **Bản đồ / Link Google Maps**: Có thể bổ sung link/iframe dẫn đến địa điểm tổ chức

### Triển khai (Deployment)
- [x] Build production: `npm run build` (Hoàn thành - thư mục `dist/` đã sẵn sàng)
- [x] Deploy lên **Vercel** liên kết với GitHub
- [ ] Cấu hình domain tùy chỉnh (nếu cần)

---

## 📁 Cấu Trúc Dự Án

```
d:\Project\SaveTheDate\
├── app/
│   ├── public/
│   │   └── hero_image.jpg          ← Thay bằng ảnh thật
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── CalendarSection.jsx
│   │   │   ├── FamilySection.jsx
│   │   │   ├── VenueSchedule.jsx
│   │   │   ├── LoveStoryGallery.jsx
│   │   │   └── CountdownQR.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
├── DESIGN.md                        ← Bảng màu & typography
└── progress.md                      ← File này
```

---

## 🚀 Lệnh Chạy Dev

```bash
cd d:\Project\SaveTheDate\app
npm run dev
# → http://localhost:5173
```
