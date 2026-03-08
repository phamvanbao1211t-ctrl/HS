export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Architecture BIM' | 'Structural BIM' | 'LGS Project' | 'R&D / BIM Development' | 'Marketing';
  description: string;
  imageUrl: string;
  imageFit?: 'cover' | 'contain';
  details: string[];
  software: string[];
  gallery: string[];
  modelUrl?: string;
  hideOverview?: boolean;
  hideGallery?: boolean;
  videos?: string[];
}

export const projects: Project[] = [
  {
    id: 'marketing-1',
    title: '218 Belmore',
    location: 'Online',
    category: 'Marketing',
    description: 'Tổng hợp các video giới thiệu dự án và quy trình làm việc BIM.',
    imageUrl: 'https://i.postimg.cc/R4vV5Ljm/a1.png',
    imageFit: 'contain',
    details: [
      'Video giới thiệu dự án',
      'Mô phỏng quy trình thi công 4D',
      'Diễn họa kiến trúc (Architectural Visualization)'
    ],
    software: ['Revit', 'Navisworks', 'Framecad', 'Enscape'],
    gallery: [
      'https://i.postimg.cc/pRPXbJgp/a2.png',
      'https://i.postimg.cc/2rTjzBDh/a3.png',
      'https://i.postimg.cc/1ytm45mc/a4.png'
    ],
    videos: [
      'https://www.youtube.com/embed/k1mIgG5DNB4'
    ]
  },
  {
    id: 'marketing-2',
    title: 'Nhà xưởng',
    location: 'Bắc Ninh',
    category: 'Marketing',
    description: 'Tổng hợp các video giới thiệu dự án và quy trình làm việc BIM.',
    imageUrl: 'https://i.postimg.cc/DvzdMGnD/nha-xuong.png',
    imageFit: 'contain',
    details: [
      'Video giới thiệu dự án',
      'Mô phỏng quy trình thi công 4D',
      'Diễn họa kiến trúc (Architectural Visualization)'
    ],
    software: ['Revit', 'Navisworks', 'Enscape'],
    gallery: [
      'https://i.postimg.cc/5Jkwt6fR/nha-xuong-1.png',
      'https://i.postimg.cc/fZGmxpt7/nha-xuong-2.png',
      'https://i.postimg.cc/hcVxMsTy/nha-xuong-3.png'
    ],
    videos: [
      'https://www.youtube.com/embed/Ssp4a1f5RaU'
    ]
  },
  {
    id: '1',
    title: 'Chung cư An Dương Vương',
    location: 'Thành phố Lào Cai',
    category: 'Architecture BIM',
    description: 'Đồ án tốt nghiệp: Thiết kế chung cư cao tầng. Triển khai mô hình BIM tổng thể, phân tích hiệu quả năng lượng và chi tiết kết cấu.',
    imageUrl: 'https://i.postimg.cc/PpvJYyRn/image.png',
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
    modelUrl: 'https://viewer.autodesk.com/id/dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YTM2MHZpZXdlci1wcm90ZWN0ZWQvdDE3NzIyNzY0MjRfM2IzZmVmOGYtYjY5OS00YWVlLWJmNjMtNTU0ZTg0OWUxM2U4LnJ2dA?sheetId=ZDc3ZDZiZWUtNDM4YS02M2ExLTZmOTYtYmU4ZThkNzI4Mzlj'
  },
  {
    id: '2',
    title: 'Charaton Project',
    location: 'Paris, France',
    category: 'Structural BIM',
    description: 'Triển khai chi tiết kết cấu bê tông cốt thép cho công trình tại Pháp theo tiêu chuẩn Eurocode.',
    imageUrl: 'https://i.postimg.cc/2qKJg783/image.png',
    imageFit: 'contain',
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
    modelUrl: 'https://sketchfab.com/models/ecca447e99454d27a241cba67fd84627/embed'
  },
  {
    id: '3',
    title: 'Gelex Trần Nguyên Hãn',
    location: '27-29 Lý Thái Tổ, Hoàn Kiếm, Hà Nội',
    category: 'Structural BIM',
    description: 'Tòa nhà văn phòng thương mại cao cấp tại trung tâm Hà Nội. Mô hình hóa kết cấu phức tạp.',
    imageUrl: 'https://i.postimg.cc/QB8hjm3g/image.png',
    imageFit: 'contain',
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
    imageUrl: 'https://i.postimg.cc/HT7N6fBb/112.png',
    imageFit: 'contain',
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
    imageUrl: 'https://i.postimg.cc/fMCF9wPs/anh-bia-phone-boot.png',
    details: [
      'Thiết kế Family Revit cho các module lắp ghép',
      'Bản vẽ lắp ráp chi tiết (Assembly Drawings)',
      'Kích thước kỹ thuật chính xác cho sản xuất',
      'Mô hình 3D trực quan hóa sản phẩm'
    ],
    software: ['Revit Family', 'Inventor'],
    gallery: ['https://i.postimg.cc/CFdvnbDk/1.png']
  },
  {
    id: '6',
    title: '218 Belmore RD',
    location: 'No.218 Belmore Balwyn, Australia',
    category: 'Architecture BIM',
    description: 'Biệt thự cao cấp tại Úc. Triển khai hồ sơ kiến trúc từ concept đến bản vẽ thi công.',
    imageUrl: 'https://i.postimg.cc/qNKPVJLs/image.png',
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
    imageUrl: 'https://i.postimg.cc/8fr2pTGS/image.png',
    imageFit: 'contain',
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
    title: 'CAN22012_12 Violet Terrace Tralee',
    location: 'Tralee, Ireland',
    category: 'LGS Project',
    description: 'Mô hình khung thép nhẹ (LGS) chi tiết cho dự án nhà ở tại Tralee.',
    imageUrl: 'https://i.postimg.cc/xfYsdB0L/1q.png',
    imageFit: 'contain',
    details: [
      'Mô hình 3D chi tiết hệ khung LGS',
      'Bố trí hệ giằng và liên kết',
      'Tối ưu hóa thiết kế sản xuất',
      'Xuất bản vẽ lắp dựng'
    ],
    software: ['Revit', 'Vertex BD'],
    gallery: [],
    modelUrl: 'https://sketchfab.com/models/e26d8ef6335b4a0c979130ecd96ddf75/embed',
    hideOverview: true,
    hideGallery: true
  },
  {
    id: '9',
    title: 'CAN22018_19-10 Whitlam',
    location: 'Tralee, Ireland',
    category: 'LGS Project',
    description: 'Mô hình khung thép nhẹ (LGS) chi tiết cho dự án nhà ở tại Tralee.',
    imageUrl: 'https://i.postimg.cc/6WgfvSwq/2q.png',
    imageFit: 'contain',
    details: [
      'Mô hình 3D chi tiết hệ khung LGS',
      'Bố trí hệ giằng và liên kết',
      'Tối ưu hóa thiết kế sản xuất',
      'Xuất bản vẽ lắp dựng'
    ],
    software: ['Revit', 'Vertex BD'],
    gallery: [],
    modelUrl: 'https://sketchfab.com/models/760dacf4ebf64981846f043c1c7d2497/embed',
    hideOverview: true,
    hideGallery: true
  },
  {
    id: '10',
    title: 'CAN22016_17 Alan Avenue',
    location: 'Tralee, Ireland',
    category: 'LGS Project',
    description: 'Mô hình khung thép nhẹ (LGS) chi tiết cho dự án nhà ở tại Tralee.',
    imageUrl: 'https://i.postimg.cc/J19scWyD/3q.png',
    imageFit: 'contain',
    details: [
      'Mô hình 3D chi tiết hệ khung LGS',
      'Bố trí hệ giằng và liên kết',
      'Tối ưu hóa thiết kế sản xuất',
      'Xuất bản vẽ lắp dựng'
    ],
    software: ['Revit', 'Vertex BD'],
    gallery: [],
    modelUrl: 'https://sketchfab.com/models/760dacf4ebf64981846f043c1c7d2497/embed',
    hideOverview: true,
    hideGallery: true
  },
  {
    id: '11',
    title: 'CAN22005_12-127 Taylor',
    location: 'Tralee, Ireland',
    category: 'LGS Project',
    description: 'Mô hình khung thép nhẹ (LGS) chi tiết cho dự án nhà ở tại Tralee.',
    imageUrl: 'https://i.postimg.cc/LRvHmpHt/4q.png',
    imageFit: 'contain',
    details: [
      'Mô hình 3D chi tiết hệ khung LGS',
      'Bố trí hệ giằng và liên kết',
      'Tối ưu hóa thiết kế sản xuất',
      'Xuất bản vẽ lắp dựng'
    ],
    software: ['Revit', 'Vertex BD'],
    gallery: [],
    modelUrl: 'https://sketchfab.com/models/5f5492b198444b58905a89af7ab0d3a2/embed',
    hideOverview: true,
    hideGallery: true
  },
  {
    id: '12',
    title: 'CAN22004_13 Section 20 Whitlam',
    location: 'Tralee, Ireland',
    category: 'LGS Project',
    description: 'Mô hình khung thép nhẹ (LGS) chi tiết cho dự án nhà ở tại Tralee.',
    imageUrl: 'https://i.postimg.cc/69NsdjWL/5q.png',
    imageFit: 'contain',
    details: [
      'Mô hình 3D chi tiết hệ khung LGS',
      'Bố trí hệ giằng và liên kết',
      'Tối ưu hóa thiết kế sản xuất',
      'Xuất bản vẽ lắp dựng'
    ],
    software: ['Revit', 'Vertex BD'],
    gallery: [],
    modelUrl: 'https://sketchfab.com/models/c9dd3ea6d2b349138acce638a27eeb3d/embed',
    hideOverview: true,
    hideGallery: true
  },
  {
    id: '13',
    title: 'CAN22001_007-002 Taylor',
    location: 'Tralee, Ireland',
    category: 'LGS Project',
    description: 'Mô hình khung thép nhẹ (LGS) chi tiết cho dự án nhà ở tại Tralee.',
    imageUrl: 'https://i.postimg.cc/PTgfRMfx/6q.png',
    imageFit: 'contain',
    details: [
      'Mô hình 3D chi tiết hệ khung LGS',
      'Bố trí hệ giằng và liên kết',
      'Tối ưu hóa thiết kế sản xuất',
      'Xuất bản vẽ lắp dựng'
    ],
    software: ['Revit', 'Vertex BD'],
    gallery: [],
    modelUrl: 'https://sketchfab.com/models/1824081a2ac24e1ab4deed939c6b790b/embed',
    hideOverview: true,
    hideGallery: true
  },
  {
    id: '14',
    title: 'Nghiên cứu ứng dụng BIM trong phân tích năng lượng',
    location: 'Trường Đại học Giao thông Vận tải',
    category: 'R&D / BIM Development',
    description: 'Nghiên cứu ứng dụng BIM trong phân tích năng lượng và môi trường cho công trình chung cư.',
    imageUrl: 'https://i.postimg.cc/pRw8J8gm/d68c4256-399f-4a12-93ea-0230add589c1.png',
    details: [
      'Mô hình hóa kiến trúc công trình chung cư bằng phần mềm BIM (Revit)',
      'Thiết lập mô hình khối công trình phục vụ phân tích môi trường',
      'Phân tích quỹ đạo mặt trời và hướng chiếu nắng theo thời gian trong năm',
      'Xây dựng mô hình kết cấu 3D của công trình để phục vụ tính toán',
      'Thực hiện mô phỏng dòng gió (CFD) xung quanh công trình',
      'Phân tích tốc độ và hướng gió tác động lên bề mặt công trình',
      'Đánh giá vùng xoáy gió và vùng áp lực gió lớn quanh khối nhà'
    ],
    software: ['Ecotect', 'Insight Revit', 'Flow Design'],
    gallery: [
      'https://i.postimg.cc/CFdvnbDk/1.png',
      'https://i.postimg.cc/08pzfB7F/2.png'
    ]
  }
];
