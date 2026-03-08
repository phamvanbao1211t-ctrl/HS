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
}

export const projects: Project[] = [
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
    modelUrl: 'https://sketchfab.com/models/embed-placeholder'
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
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
      'https://ibb.co/6079FS3p'
    ],
    modelUrl: 'https://sketchfab.com/models/embed-placeholder'
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
    imageUrl: 'https://images.unsplash.com/photo-1565514020176-db7933f381f0?auto=format&fit=crop&q=80&w=1000',
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
  }
];
