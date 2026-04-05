// ─── Types ───

export interface Restaurant {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  imageUrl: string;
  matchScore: number;
  discount?: string;
  tags: string[];
}

export interface Magazine {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  source: string;
}

export interface ThemeCategory {
  id: string;
  label: string;
  description: string;
  imageUrl: string;
}

export interface QuickMenuItem {
  id: string;
  label: string;
  icon: string;
  color: string;
}

// ─── Quick Menu Items ───

export const quickMenuItems: QuickMenuItem[] = [
  { id: "1", label: "맛집 찾기", icon: "finder", color: "#3B82F6" },
  { id: "2", label: "입맛 분석", icon: "dna", color: "#F59E0B" },
  { id: "4", label: "예약 조회", icon: "booking", color: "#8B5CF6" },
  { id: "7", label: "할인·쿠폰", icon: "coupon", color: "#F97316" },
  { id: "10", label: "에디터 추천", icon: "coffee", color: "#D946EF" },
  { id: "11", label: "맛집 랭킹", icon: "chart", color: "#06B6D4" },
];

// ─── Trending Restaurants (지금 뜨는 맛집) ───

export const trendingRestaurants: Restaurant[] = [
  {
    id: "t1",
    name: "스시 오마카세 하루",
    category: "일식 · 오마카세",
    location: "서울 강남구",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    matchScore: 96,
    discount: "첫 예약 20% 할인",
    tags: ["오마카세", "데이트"],
  },
  {
    id: "t2",
    name: "프론트엔드 파스타",
    category: "이탈리안",
    location: "서울 성수동",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop",
    matchScore: 92,
    tags: ["파스타", "브런치"],
  },
  {
    id: "t3",
    name: "을지로 골목 한우",
    category: "한식 · 소고기",
    location: "서울 을지로",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    matchScore: 89,
    discount: "첫 예약 20% 할인",
    tags: ["한우", "회식"],
  },
  {
    id: "t4",
    name: "성수 브런치 카페",
    category: "카페 · 브런치",
    location: "서울 성수동",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    matchScore: 94,
    discount: "주중 아메리카노 무료",
    tags: ["브런치", "카페"],
  },
  {
    id: "t5",
    name: "홍대 타코 하우스",
    category: "멕시칸",
    location: "서울 마포구",
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    matchScore: 87,
    tags: ["타코", "혼밥"],
  },
];

// ─── Magazine Articles (지금 주목할 소식) ───

export const magazines: Magazine[] = [
  {
    id: "m1",
    title: "요즘 핫한 성수동 디저트 맛집 TOP 5",
    subtitle: "최고의 디저트와 함께 빛나는 글로벌 미식 여행",
    imageUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=340&fit=crop",
    source: "Match Table 에디터",
  },
  {
    id: "m2",
    title: "2026 미슐랭 가이드 서울 신규 선정 맛집",
    subtitle: "사람과 맛이 함께할 세상의 미식을 찾습니다",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=340&fit=crop",
    source: "Match Table 매거진",
  },
  {
    id: "m3",
    title: "합격은 확률이다, 내 입맛에 오픈 맛집 확인하기",
    subtitle: "우리의 내 입맛이 오른 맛집 확인하기",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=340&fit=crop",
    source: "Match Table 인사이트",
  },
];

// ─── Theme Categories (테마로 찾는 맛집) ───

export const themeCategories: ThemeCategory[] = [
  {
    id: "th1",
    label: "데이트 맛집",
    description: "분위기 좋은 레스토랑 모음",
    imageUrl: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=260&fit=crop",
  },
  {
    id: "th2",
    label: "혼밥 맛집",
    description: "혼자서도 편한 맛집",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=260&fit=crop",
  },
  {
    id: "th3",
    label: "회식 맛집",
    description: "대규모 모임도 OK",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=260&fit=crop",
  },
  {
    id: "th4",
    label: "브런치 맛집",
    description: "여유로운 주말 브런치",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=260&fit=crop",
  },
];

// ─── Nearby Restaurants (내 주변 인기 맛집) ───

export interface NearbyRestaurant {
  id: string;
  name: string;
  category: string;
  location: string;
  matchScore: number;
  imageUrl: string;
  area: string;
}

export const nearbyRestaurants: NearbyRestaurant[] = [
  { id: "n1", name: "리틀넥 강남", category: "양식 · 버거", location: "서울 강남구 · 경력 무관", matchScore: 95, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop", area: "강남" },
  { id: "n2", name: "봉피양 역삼", category: "한식 · 냉면", location: "서울 강남구 · 예약 가능", matchScore: 91, imageUrl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=80&h=80&fit=crop", area: "강남" },
  { id: "n3", name: "스시 카덴 강남", category: "일식 · 스시", location: "서울 강남구 · 웨이팅 있음", matchScore: 93, imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=80&h=80&fit=crop", area: "강남" },
  { id: "n4", name: "매드포갈릭 강남", category: "이탈리안", location: "서울 강남구 · 단체 가능", matchScore: 88, imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&h=80&fit=crop", area: "강남" },
  { id: "n5", name: "크레이버 갈비찜", category: "한식 · 찜", location: "서울 강남구 · 포장 가능", matchScore: 90, imageUrl: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=80&h=80&fit=crop", area: "강남" },
  { id: "n6", name: "콘텐츠 마라탕", category: "중식 · 마라", location: "서울 강남구 · 신규 오픈", matchScore: 86, imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=80&h=80&fit=crop", area: "강남" },
  { id: "n7", name: "홍대 피자 스토리", category: "양식 · 피자", location: "서울 마포구 · 배달 가능", matchScore: 92, imageUrl: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=80&h=80&fit=crop", area: "홍대" },
  { id: "n8", name: "연남동 칼국수", category: "한식 · 면", location: "서울 마포구 · 웨이팅 있음", matchScore: 89, imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de1b100?w=80&h=80&fit=crop", area: "홍대" },
  { id: "n9", name: "상수 카레 공방", category: "일식 · 카레", location: "서울 마포구 · 혼밥 가능", matchScore: 87, imageUrl: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=80&h=80&fit=crop", area: "홍대" },
  { id: "n10", name: "성수 수제버거", category: "양식 · 버거", location: "서울 성동구 · 신규 오픈", matchScore: 94, imageUrl: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=80&h=80&fit=crop", area: "성수" },
  { id: "n11", name: "성수 떡볶이 팩토리", category: "한식 · 분식", location: "서울 성동구 · 포장 가능", matchScore: 91, imageUrl: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=80&h=80&fit=crop", area: "성수" },
  { id: "n12", name: "성수 베이커리 카페", category: "카페 · 베이커리", location: "서울 성동구 · 루프탑", matchScore: 88, imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=80&h=80&fit=crop", area: "성수" },
  { id: "n13", name: "여의도 곱창 골목", category: "한식 · 곱창", location: "서울 영등포구 · 예약 필수", matchScore: 90, imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=80&h=80&fit=crop", area: "여의도" },
  { id: "n14", name: "IFC 씨푸드 바", category: "양식 · 해산물", location: "서울 영등포구 · 뷰 맛집", matchScore: 93, imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=80&h=80&fit=crop", area: "여의도" },
  { id: "n15", name: "을지로 노가리 골목", category: "한식 · 안주", location: "서울 중구 · 분위기 맛집", matchScore: 85, imageUrl: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=80&h=80&fit=crop", area: "을지로" },
  { id: "n16", name: "을지로 수제맥주", category: "펍 · 크래프트", location: "서울 중구 · 야외 테라스", matchScore: 88, imageUrl: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=80&h=80&fit=crop", area: "을지로" },
];

// ─── New Restaurants (요즘 뜨는 신상 맛집) ───

export const newRestaurants: Restaurant[] = [
  {
    id: "r1",
    name: "에비스 라멘 신논현",
    category: "일식 · 라멘",
    location: "서울 강남구",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop",
    matchScore: 93,
    discount: "오픈 기념 10% 할인",
    tags: ["NEW", "라멘"],
  },
  {
    id: "r2",
    name: "EVERUNS 광교기획실",
    category: "양식 · 스테이크",
    location: "서울 구로구",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
    matchScore: 88,
    discount: "웰컴 드링크 무료",
    tags: ["NEW", "스테이크"],
  },
  {
    id: "r3",
    name: "리틀넥 을지로",
    category: "양식 · 버거",
    location: "서울 중구",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
    matchScore: 91,
    discount: "오픈 기념 15% 할인",
    tags: ["NEW", "버거"],
  },
  {
    id: "r4",
    name: "AI 맛집 UX 디자이너 추천",
    category: "퓨전 · 창작요리",
    location: "서울 서초구",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
    matchScore: 96,
    tags: ["NEW", "퓨전"],
  },
  {
    id: "r5",
    name: "운영 맛집 관리 매니저",
    category: "한식 · 정식",
    location: "경기 고양시",
    rating: 4.3,
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
    matchScore: 84,
    discount: "오픈 기념 20% 할인",
    tags: ["NEW", "한정식"],
  },
];

// ─── Area options ───

export const areaOptions = ["강남", "홍대", "성수", "여의도", "을지로"] as const;
export type Area = (typeof areaOptions)[number];
