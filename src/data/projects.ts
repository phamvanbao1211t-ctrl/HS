export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Architecture BIM' | 'Structural BIM' | 'LGS Project' | 'R&D / BIM Development' | 'Marketing';
  description: string;
  imageUrl: string;
  details: string[];
  software: string[];
  gallery: string[];
  modelUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Chung cư An Dương Vương',
    location: 'Thành phố Lào Cai',
    category: 'Architecture BIM',
    description: 'Đồ án tốt nghiệp: Thiết kế chung cư cao tầng. Triển khai mô hình BIM tổng thể, phân tích hiệu quả năng lượng và chi tiết kết cấu.',
    imageUrl: '/images/chung-cu-an-duong-vuong.png',
    details: [
      'Mô hình 3D tổng thể và mặt cắt kiến trúc',
      'Mặt bằng bố trí căn hộ điển hình',
      'Phân tích năng lượng mặt trời và gió (Solar/Wind Analysis)',
      'Triển khai chi tiết kết cấu móng và khung bê tông cốt thép'
    ],
    software: ['Revit', 'Ecotect', 'AutoCAD'],
    gallery: [
      'https://i.postimg.cc/2q90bncn/image.png',
      'https://i.postimg.cc/2qY1Qtt0/image.png'
    ],
    modelUrl: 'https://sketchfab.com/models/e26d8ef6335b4a0c979130ecd96ddf75/embed'
  },
  {
    id: '2',
    title: 'Charaton Project',
    location: 'Paris, France',
    category: 'Structural BIM',
    description: 'Triển khai chi tiết kết cấu bê tông cốt thép cho công trình tại Pháp theo tiêu chuẩn Eurocode.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000',
    details: [
      'Bản vẽ chi tiết dầm, cột (Rebar Detailing)',
      'Mô hình hóa cốt thép 3D phức tạp',
      'Kiểm soát khối lượng thép',
      'Mặt cắt kỹ thuật thi công'
    ],
    software: ['Revit Structure', 'AutoCAD'],
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
    ],
    modelUrl: 'https://sketchfab.com/models/embed-placeholder'
  },
  {
    id: '3',
    title: 'Gelex Trần Nguyên Hãn',
    location: '27-29 Lý Thái Tổ, Hoàn Kiếm, Hà Nội',
    category: 'Structural BIM',
    description: 'Tòa nhà văn phòng thương mại cao cấp tại trung tâm Hà Nội. Mô hình hóa kết cấu phức tạp.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    details: [
      'Mô hình kết cấu 3D hệ dầm chuyển',
      'Bản vẽ mặt bằng dầm sàn tầng điển hình',
      'Chi tiết cốt thép dầm và vách cứng',
      'Phối hợp kiểm soát xung đột (Clash Detection)'
    ],
    software: ['Revit', 'Navisworks'],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '4',
    title: 'Trụ sở Ngân hàng TMCP Quân Đội',
    location: '54 Điện Biên Phủ, Đà Nẵng',
    category: 'Structural BIM',
    description: 'Tòa nhà văn phòng cao tầng. Triển khai hồ sơ kết cấu và thống kê khối lượng.',
    imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1000',
    details: [
      'Mô hình 3D kết cấu chịu lực',
      'Mặt bằng kết cấu sàn và bố trí thép',
      'Bảng thống kê cột, vách và chi tiết thép tự động',
      'Triển khai bản vẽ thi công'
    ],
    software: ['Revit', 'Excel'],
    gallery: [
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '5',
    title: 'Nghiên cứu Phone Booth Tự động',
    location: 'Hợp tác cùng Schiavello',
    category: 'R&D / BIM Development',
    description: 'Nghiên cứu và phát triển sản phẩm Phone Booth theo hướng tự động hóa module.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    details: [
      'Thiết kế Family Revit cho các module lắp ghép',
      'Bản vẽ lắp ráp chi tiết (Assembly Drawings)',
      'Kích thước kỹ thuật chính xác cho sản xuất',
      'Mô hình 3D trực quan hóa sản phẩm'
    ],
    software: ['Revit Family', 'Inventor'],
    gallery: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
    ],
    modelUrl: 'https://sketchfab.com/models/embed-placeholder'
  },
  {
    id: '6',
    title: '218 Belmore RD',
    location: 'No.218 Belmore Balwyn, Australia',
    category: 'Architecture BIM',
    description: 'Biệt thự cao cấp tại Úc. Triển khai hồ sơ kiến trúc từ concept đến bản vẽ thi công.',
    imageUrl: '/images/218-belmore-rd.png',
    details: [
      'Phối cảnh ngoại thất và nội thất',
      'Mặt bằng mái, mặt đứng và mặt cắt',
      'Chi tiết cấu tạo kiến trúc theo tiêu chuẩn Úc',
      'Quản lý bản vẽ (Documentation)'
    ],
    software: ['Revit', 'Lumion', 'Photoshop'],
    gallery: [
      'https://i.postimg.cc/87TRDwdH/image.png',
      'https://i.postimg.cc/DWJ8KbNt/image.png'
    ]
  },
  {
    id: '7',
    title: 'ATLANTA 320 Mk20',
    location: 'Melbourne, Australia',
    category: 'Architecture BIM',
    description: 'Dự án nhà ở gia đình điển hình. Tối ưu hóa quy trình triển khai hồ sơ.',
    imageUrl: '/images/atlanta-320-mk20.png',
    details: [
      'Mô hình 3D tổng thể',
      'Mặt bằng bố trí nội thất và sàn',
      'Mặt đứng kỹ thuật và chi tiết cửa',
      'Triển khai bản vẽ Floor Plan tỷ lệ 1:100'
    ],
    software: ['Revit', 'AutoCAD'],
    gallery: [
      'https://i.postimg.cc/8fr2pTGS/image.png',
      'https://i.postimg.cc/KkYKsH2m/image.png'
    ]
  },
  {
    id: '8',
    title: '34051 Margot Avenue',
    location: 'Kalkallo, Australia',
    category: 'LGS Project',
    description: 'Mô hình hóa hệ khung thép nhẹ (Light Gauge Steel) cho nhà ở dân dụng.',
    imageUrl: 'https://images.unsplash.com/photo-1565514020176-db7933f381f0?auto=format&fit=crop&q=80&w=1000',
    details: [
      'Mô hình khung thép 3D (LGS Framing)',
      'Chi tiết vì kèo (Truss) và liên kết',
      'Danh sách cấu kiện cắt (Framing Cut List)',
      'Mặt đứng khung xương (Framing Elevation)'
    ],
    software: ['Revit', 'Vertex BD'],
    gallery: [
      'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
    ],
    modelUrl: 'https://sketchfab.com/models/e26d8ef6335b4a0c979130ecd96ddf75/embed'
  },
  {
    id: '9',
    title: '20 Kerr Street, Fitzroy Townhouses',
    location: 'Fitzroy, Australia',
    category: 'Structural BIM',
    description: 'Chi tiết kết cấu thép cho dự án Town House (Căn 8 & 9).',
    imageUrl: 'https://images.unsplash.com/photo-1590644365607-1c5a38d0747d?auto=format&fit=crop&q=80&w=1000',
    details: [
      'Chi tiết liên kết thép (Steel Connections)',
      'Mặt bằng khung dầm tầng 1',
      'Mặt cắt chi tiết kỹ thuật (Detail Sections)',
      'Bản vẽ Shop Drawing kết cấu thép'
    ],
    software: ['Revit', 'Tekla'],
    gallery: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800'
    ]
  }
];
