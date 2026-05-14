export interface Distributor {
  id: string;
  name: string;
  address: string;
  phone: string;
  lat: number; // Approximate Y coordinate on SVG (0-1000)
  lng: number; // Approximate X coordinate on SVG (0-1000)
  region: 'North' | 'Central' | 'South';
}

export const DISTRIBUTORS: Distributor[] = [
  {
    id: '1',
    name: 'Trụ sở chính - Công ty CP Xi măng Cẩm Phả',
    address: 'Km6, Quốc lộ 18A, Phường Quang Hanh, TP. Cẩm Phả, Tỉnh Quảng Ninh',
    phone: '(84-203) 372 1995',
    lat: 100, // Y
    lng: 300, // X
    region: 'North'
  },
  {
    id: '2',
    name: 'Chi nhánh Hà Nội',
    address: 'Số 1, Phố Giang Văn Minh, Quận Ba Đình, Hà Nội',
    phone: '(84-24) 6265 7118',
    lat: 115,
    lng: 225,
    region: 'North'
  },
  {
    id: '3',
    name: 'Nhà phân phối Miền Trung - Đà Nẵng',
    address: 'Lô C4-6 Khu công nghiệp Dịch vụ thủy sản Đà Nẵng, Thọ Quang, Sơn Trà, Đà Nẵng',
    phone: '(84-236) 394 3379',
    lat: 370,
    lng: 330,
    region: 'Central'
  },
  {
    id: '4',
    name: 'Văn phòng đại diện TP. Hồ Chí Minh',
    address: 'Lầu 6, Tòa nhà Vinaconex, 47 Điện Biên Phủ, Phường Tân Định, TP. HCM',
    phone: '(84-28) 6265 0558',
    lat: 610,
    lng: 280,
    region: 'South'
  },
  {
    id: '5',
    name: 'Nhà phân phối Cần Thơ',
    address: 'Khu Công nghiệp Trà Nóc, Quận Bình Thủy, TP. Cần Thơ',
    phone: '(84-292) 384 1515',
    lat: 660,
    lng: 225,
    region: 'South'
  },
  {
    id: '6',
    name: 'Nhà phân phối Nghệ An',
    address: 'KCN Bắc Vinh, TP. Vinh, Nghệ An',
    phone: '(84-238) 351 1668',
    lat: 200,
    lng: 160,
    region: 'North'
  },
  {
    id: '7',
    name: 'Nhà phân phối Khánh Hòa',
    address: 'KCN Suối Dầu, Cam Lâm, Khánh Hòa',
    phone: '(84-258) 374 3333',
    lat: 540,
    lng: 385,
    region: 'South'
  },
  {
    id: '8',
    name: 'Chi nhánh Phía Nam - Công ty Cổ phần Xi măng Cẩm Phả',
    address: 'Khu Công Nghiệp Mỹ Xuân A, Phường Phú Mỹ, TP. Hồ Chí Minh',
    phone: '0254 3899 630',
    lat: 620,
    lng: 310,
    region: 'South'
  }
];
