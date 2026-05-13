import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden pt-8 pb-4 border-t border-gray-200 mt-auto">
      {/* Asymmetric Background Accent Wave */}
      <div className="absolute bottom-0 right-0 w-[35%] h-[120%] bg-[#1A1A1A] z-0 opacity-5" style={{ clipPath: 'ellipse(100% 100% at 100% 100%)' }}></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 mb-6">

          {/* Col 1: Brand, Social & Badges (Span 4) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group mb-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src="/assets/design/logo.jpg"
                  alt="Xi Măng Cẩm Phả Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-lg font-black tracking-tight text-viettel-red group-hover:brightness-110 transition-all duration-300 whitespace-nowrap uppercase">
                  Xi măng Cẩm Phả
                </span>
              </div>
            </Link>
            <p className="text-[13px] text-gray-600 leading-relaxed max-w-xs">
              Xi Măng Cẩm Phả - Chất lượng vượt thời gian. Đơn vị thành viên của Tập đoàn Viettel, tiên phong công nghệ lò quay khô từ Nhật Bản.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-viettel-dark hover:bg-viettel-red hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" clipRule="evenodd" /></svg>
              </a>
            </div>

            {/* Certification Badges */}
            <div className="flex items-center gap-4 pt-2">
              <div className="relative h-10 w-28">
                <Image
                  src="/assets/design/dathongbao.png"
                  alt="Đã thông báo Bộ Công Thương"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-10 w-20">
                <Image
                  src="/assets/design/ipv6.png"
                  alt="IPv6 Ready"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 4) */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-viettel-dark mb-2">Liên kết nhanh</h3>
            <ul className="space-y-1.5 text-[13px] font-medium text-gray-600">
              <li><Link href="/" className="inline-block transition-all duration-300 hover:text-viettel-red hover:translate-x-1">Trang chủ</Link></li>
              <li><Link href="/about" className="inline-block transition-all duration-300 hover:text-viettel-red hover:translate-x-1">Về chúng tôi</Link></li>
              <li><Link href="/products" className="inline-block transition-all duration-300 hover:text-viettel-red hover:translate-x-1">Sản phẩm</Link></li>
              <li><Link href="/news" className="inline-block transition-all duration-300 hover:text-viettel-red hover:translate-x-1">Tin tức</Link></li>
              <li><Link href="/careers" className="inline-block transition-all duration-300 hover:text-viettel-red hover:translate-x-1">Tuyển dụng</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact & Report (Span 4) */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-viettel-dark mb-2">Thông tin liên hệ</h3>
            <ul className="space-y-2 text-[13px] text-gray-600 mb-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-viettel-red mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">Km6, Quốc lộ 18A, Phường Quang Hanh,<br />TP. Cẩm Phả, Tỉnh Quảng Ninh.</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-viettel-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@camphacement.vn" className="hover:text-viettel-red transition-colors font-medium">info@camphacement.vn</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-viettel-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold text-viettel-dark text-base">(84-203) 372 1995</span>
              </li>
            </ul>

            {/* Feedback/Report Button */}
            <button className="flex items-center px-4 py-2 bg-viettel-red text-white rounded font-semibold hover:bg-red-700 transition-colors duration-300 shadow-[0_4px_14px_0_rgba(237,28,36,0.39)] group text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Phản ánh & Góp ý
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400">
          <p>&copy; 2026 Xi măng Cẩm Phả. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0 font-medium flex">
            <a href="#" className="hover:text-viettel-red transition-colors">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-viettel-red transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
