# Thiết kế (Design System) - QR Countdown Landing Page

## 1. Typography (Kiểu chữ)
- **Font chính (Headline/Display):** Noto Serif (Sử dụng cho các tiêu đề chính, tên cặp đôi, mang lại cảm giác lãng mạn, tinh tế)
- **Font nội dung (Body):** Plus Jakarta Sans (Sử dụng cho nội dung văn bản, thông tin hậu cần, thời gian, địa điểm)
- **Font nhãn (Label):** Plus Jakarta Sans (Sử dụng cho các nhãn nhỏ gọn như "DRESS CODE" hoặc "RSVP BY")

*Ghi chú:* Kết hợp giữa sự cổ điển của nét chữ Serif và sự hiện đại sạch sẽ của Sans-serif giúp thiết kế không bị quá "cũ" mà vẫn rất sang trọng.

## 2. Color Palette (Bảng màu)
- **Tone màu chủ đạo:** Tươi sáng (Light Mode), ấm áp.
- **Màu tuỳ chỉnh gốc (Custom Color):** `#E8D8C4`

### Các màu ghi đè chính (Override Colors)
- **Primary:** `#C5A059` (Vàng đồng)
- **Secondary:** `#363330` (Xám than)
- **Tertiary:** `#E5D1B8` (Be ấm)
- **Neutral:** `#FDFBF7` (Trắng ngà)

### Hệ thống màu cơ bản (Named Colors)
- **Background / Surface:** `#fbf9f5` (Màu nền chính, tựa như màu giấy mời cao cấp)
- **On Background / On Surface:** `#31332f` (Màu chữ cơ bản, xám đậm ánh than, không dùng đen tuyền `#000000`)
- **Surface Container (cho các phân vùng nhỏ):**
  - **Surface Container Low:** `#f5f4ef`
  - **Surface Container:** `#efeee9`
- **Inverse Surface:** `#0e0e0d` (Làm nền đậm cho các khu vực nổi bật, ví dụ: Đồng hồ đếm ngược)
- **Primary (dành cho các nút/hành động chính):** `#785a1a`
- **Biến thể viền (Outline Variant):** `#b2b2ad` (Dùng với độ mờ 15% cho hiệu ứng "Ghost Border")

## 3. Đặc trưng giao diện
- **Sự hài hoà vô hình (The "No-Line" Rule):** Không sử dụng các đường viền 1px (`solid`) định hình quá cứng. Thay vào đó, dùng sự khác biệt nhẹ về màu chữ hoặc màu nền để phân chia các khối.
- **Độ bo góc (Roundness):** `ROUND_FOUR` (Sử dụng mượt mà trên nhiều nút nhấn, hộp thoại, hoặc góc ảnh polaroid nhỏ).
- **Đổ bóng:** Dùng ánh mờ lan toả rộng, nhạt chứ không dùng đổ bóng gắt, nhằm duy trì sự nhẹ nhàng của trang tĩnh.
