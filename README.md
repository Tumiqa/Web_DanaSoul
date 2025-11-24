# 🌊 DanaSoul - Chạm Vào Vẻ Đẹp Đà Nẵng 
# danasoul.id.vn
> **Sản phẩm dự thi: Hành trình Thống nhất (The Unification Journey)**

![DanaSoul Logo](DanaSoulLogo.png)

**DanaSoul** là một website trải nghiệm du lịch tương tác (Interactive Travel Experience), được thiết kế để đón đầu sự kiện lịch sử giả định năm 2025: Sự sáp nhập giữa Đà Nẵng và Quảng Nam. Dự án không chỉ là một trang thông tin du lịch, mà là một hành trình chạm vào "linh hồn" (Soul) của vùng đất miền Trung thông qua công nghệ và cảm xúc.

![Status](https://img.shields.io/badge/Status-Prototype-green) ![Tech](https://img.shields.io/badge/Stack-GSAP%20|%20Mapbox%20|%20Tailwind-blue)

## 📖 Bối cảnh & Ý tưởng
Năm 2025, Đà Nẵng và Quảng Nam sáp nhập, tạo nên một siêu đô thị du lịch với bề dày văn hóa và thiên nhiên hùng vĩ. **DanaSoul** ra đời để:
1.  **Kể chuyện (Storytelling):** Dẫn dắt người xem từ lịch sử Champa đến tương lai 2025.
2.  **Cá nhân hóa (Personalization):** Gợi ý lịch trình du lịch thông minh dựa trên phong cách người dùng.
3.  **Đa giác quan (Multi-sensory):** Kết hợp hình ảnh, hiệu ứng chuyển động và âm nhạc bản địa để tạo ra trải nghiệm "du lịch qua màn hình".

## ✨ Tính năng trải nghiệm (CX Highlights)

### 1. 🧭 La Bàn Văn Hóa (Culture Compass)
* **Mô tả:** Một giao diện tương tác hình tròn độc đáo. Thay vì danh sách nhàm chán, người dùng xoay "la bàn" để khám phá các khía cạnh văn hóa: *Con người, Lễ hội, Di sản, Làng nghề.*
* **UX:** Hiệu ứng hover và mở rộng mượt mà, khuyến khích sự tò mò và khám phá.

### 2. 🗺️ Bản Đồ Tương Tác (Interactive Map)
* **Công nghệ:** Tích hợp **Mapbox GL JS**.
* **Tính năng:** Hiển thị trực quan các điểm đến nổi tiếng (Cầu Vàng, Sơn Trà, Hội An...).
* **Chi tiết:** Bấm vào marker để "bay" (FlyTo effect) đến địa điểm và xem thông tin chi tiết kèm hình ảnh.
* **Bản đồ số:** Tích hợp iframe bản đồ số chính thống của TP. Đà Nẵng.

### 3. 📅 Lập Kế Hoạch Thông Minh (Smart Planner)
* **Vấn đề:** Du khách thường bối rối không biết đi đâu trong 3 ngày hay 5 ngày.
* **Giải pháp:** Hệ thống tự động tạo lịch trình chi tiết (Sáng/Trưa/Chiều/Tối) dựa trên:
    * Số ngày đi (2 - 5 ngày).
    * Phong cách (Khám phá, Nghỉ dưỡng, Văn hóa).

### 4. 📜 Scrollytelling Lịch Sử
* **Công nghệ:** Sử dụng **GSAP ScrollTrigger**.
* **Trải nghiệm:** Khi người dùng cuộn chuột, dòng thời gian lịch sử từ thế kỷ IV đến năm 2025 hiện ra song song với hình ảnh minh họa thay đổi mượt mà, tạo cảm giác như đang xem một bộ phim tài liệu.

### 5. 🎶 Trình Phát Nhạc "Hồn Việt"
* **Âm thanh:** Tích hợp **Tone.js** để xử lý âm thanh.
* **Playlist:** Tuyển tập các ca khúc mang đậm bản sắc (Xin chào Việt Nam, Một vòng Việt Nam...).
* **Hiệu ứng:** Nút Play có hiệu ứng "thở" (breathing glow) theo nhịp nhạc.

## 🛠️ Công nghệ sử dụng (Tech Stack)

Dự án được xây dựng theo tiêu chí **High Performance** và **Interactive**:

* **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework).
* **Animations:**
    * [GSAP (GreenSock)](https://greensock.com/): Xử lý toàn bộ hiệu ứng cuộn, parallax và chuyển cảnh phức tạp.
    * CSS Keyframes: Hiệu ứng particle, glow, floating.
* **Maps:** [Mapbox GL JS](https://www.mapbox.com/): Bản đồ vector tùy chỉnh giao diện tối (Dark mode).
* **Audio:** [Tone.js](https://tonejs.github.io/): Web Audio Framework.
* **Icons:** [Lucide Icons](https://lucide.dev/).
* **Font:** "Be Vietnam Pro" (Google Fonts) & "Rebel" (Custom Font).

## 🚀 Hướng dẫn cài đặt & Chạy Demo

Do dự án là Static Web (Client-side), bạn có thể chạy dễ dàng mà không cần cài đặt môi trường backend.

### Cách 1: Sử dụng Live Server (VS Code) - Khuyến nghị
1.  Tải toàn bộ source code về máy.
2.  Mở thư mục dự án bằng **Visual Studio Code**.
3.  Cài đặt extension **Live Server**.
4.  Chuột phải vào file `index.html` chọn **"Open with Live Server"**.
    * *Lý do:* Một số thư viện như Mapbox hoặc Tone.js yêu cầu chạy trên giao thức `http://` hoặc `https://` thay vì `file://` để hoạt động đúng.

### Cách 2: Mở trực tiếp
1.  Đảm bảo máy tính có kết nối Internet (để tải CDN thư viện Mapbox, GSAP...).
2.  Mở file `index.html` bằng trình duyệt Chrome/Edge.

## 📂 Cấu trúc thư mục

```text
DanaSoul/
├── index.html          # File chính chứa toàn bộ cấu trúc và logic JS
├── DanaSoulLogo.png    # Logo dự án
├── logo.jpg            # Ảnh đại diện dự án
├── Rebel/              # Font chữ custom
├── images/             # Thư mục hình ảnh (Diem den, Am thuc, Van hoa...)
├── videos/             # Video nền Hero section
└── music/              # Các file nhạc MP3
