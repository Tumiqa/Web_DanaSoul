const nodemailer = require("nodemailer");

// Hàm chính xử lý yêu cầu
export default async function handler(req, res) {
  // Chỉ chấp nhận phương thức POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Cấu hình transporter để gửi mail qua Gmail
  // Sử dụng biến môi trường để bảo mật thông tin
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Email người gửi (tài khoản Gmail bạn vừa tạo)
      pass: process.env.GMAIL_PASS, // Mật khẩu ứng dụng 16 ký tự
    },
  });

  // Cấu hình nội dung email sẽ được gửi đi
  const mailOptions = {
    from: `"DanaSoul Website" <${process.env.GMAIL_USER}>`, // Tên người gửi
    to: "info@danasoul.id.vn", // Email chính của bạn để nhận thông báo
    replyTo: email, // Khi bạn trả lời, sẽ trả lời thẳng cho khách hàng
    subject: `Lời nhắn mới từ ${name}`,
    html: `
      <h2>Có lời nhắn mới từ website DanaSoul</h2>
      <p><strong>Tên người gửi:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr>
      <p><strong>Nội dung:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    // Gửi mail
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to send message." });
  }
}
