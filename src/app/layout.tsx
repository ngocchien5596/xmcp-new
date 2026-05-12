import type { Metadata } from "next";
import { fsMagistral, roboto } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xi măng Cẩm Phả - Giải pháp Công nghệ thông tin toàn cầu",
  description: "Cung cấp giải pháp và dịch vụ công nghệ thông tin toàn cầu...",
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
