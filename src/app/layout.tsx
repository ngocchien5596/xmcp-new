import type { Metadata } from "next";
import { fsMagistral, roboto } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xi măng Cẩm Phả - Kiến tạo những công trình bền vững",
  description: "Công ty Cổ phần Xi măng Cẩm Phả - Đơn vị thành viên của Tập đoàn Viettel, chuyên cung cấp các giải pháp xây dựng chất lượng cao, bền vững cho mọi công trình.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${roboto.variable} ${fsMagistral.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
