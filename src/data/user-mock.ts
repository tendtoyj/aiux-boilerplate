// ────────────────────────────────────────────────────────
// Multi-User Mock Data
// 4명의 페르소나 × 유저별 맛 프로필·방문기록·리뷰·쿠폰
// + 공유 레스토랑 풀 18개
// ────────────────────────────────────────────────────────

import type { TasteScores } from "@/lib/tools/show-taste";
import type { VisitItem } from "@/lib/tools/read-history";
import type { ReviewItem } from "@/lib/tools/read-review";
import type { CouponItem } from "@/lib/tools/show-coupon";

// ── 타입 정의 ──────────────────────────────────────────

export interface UserPersona {
  id: string;
  name: string;
  description: string;
  area: string;
}

export interface UserData {
  taste: {
    scores: TasteScores;
    preferredCategories: string[];
    summary: string;
  };
  visits: VisitItem[];
  reviews: ReviewItem[];
  coupons: CouponItem[];
  favoriteAreas: string[];
}

export interface RestaurantPoolItem {
  name: string;
  photoUrl: string;
  rating: number;
  description: string;
  category: string;
  area: string;
  moods: string[];
}

// ── 유저 페르소나 (UI 셀렉터용) ────────────────────────

export const userPersonas: UserPersona[] = [
  {
    id: "user-001",
    name: "김지은",
    description: "강남 UX 디자이너, 일식·이탈리안 미식가",
    area: "강남/성수",
  },
  {
    id: "user-002",
    name: "박준혁",
    description: "홍대 개발자, 양식·카페 애호가",
    area: "홍대/연남",
  },
  {
    id: "user-003",
    name: "이수현",
    description: "을지로 푸드 블로거, 한식·퓨전 탐험가",
    area: "을지로/여의도",
  },
  {
    id: "user-004",
    name: "최하린",
    description: "성수 대학원생, 매운맛 마니아",
    area: "성수/건대",
  },
];

// ── 유저별 데이터 ──────────────────────────────────────

const allUserData: Record<string, UserData> = {
  // ─── user-001: 김지은 ──────────────────────────────
  "user-001": {
    taste: {
      scores: { spicy: 78, sweet: 45, salty: 62, sour: 30, umami: 85, oily: 55 },
      preferredCategories: ["일식", "이탈리안", "한식", "베트남"],
      summary:
        "감칠맛과 매운맛을 좋아하는 미식가 타입이에요! 일식과 이탈리안을 특히 자주 찾으며, 새로운 맛에 도전하는 것을 즐기는 편입니다.",
    },
    favoriteAreas: ["강남", "성수"],
    visits: [
      { date: "2026-04-04", restaurantName: "트라토리아 모리", menu: "까르보나라, 마르게리타 피자", rating: 4.5 },
      { date: "2026-04-01", restaurantName: "스시오마카세 하루", menu: "런치 오마카세 코스", rating: 5.0 },
      { date: "2026-03-28", restaurantName: "을지로 골목식당", menu: "된장찌개 백반", rating: 4.0 },
      { date: "2026-03-20", restaurantName: "반미 사이공", menu: "반미 콤보, 쌀국수", rating: 4.2 },
      { date: "2026-03-15", restaurantName: "스시오마카세 하루", menu: "디너 오마카세 코스", rating: 4.9 },
      { date: "2026-03-01", restaurantName: "트라토리아 모리", menu: "뽈로뇨제 파스타", rating: 4.7 },
      { date: "2026-02-14", restaurantName: "리스토란테 벨라", menu: "발렌타인 코스 디너", rating: 4.8 },
    ],
    reviews: [
      { text: "파스타 면이 정말 쫄깃하고 소스가 진해요. 재방문 의사 100%!", rating: 4.5, date: "2026-04-04", restaurantName: "트라토리아 모리" },
      { text: "런치 오마카세 가성비 최고. 특히 참치 배꼽살이 녹았어요.", rating: 5.0, date: "2026-04-01", restaurantName: "스시오마카세 하루" },
      { text: "집밥 느낌 제대로. 반찬도 깔끔하고 된장찌개 깊은 맛.", rating: 4.0, date: "2026-03-28", restaurantName: "을지로 골목식당" },
      { text: "반미 빵이 바삭하고 속이 알차요. 쌀국수 육수도 진함.", rating: 4.2, date: "2026-03-20", restaurantName: "반미 사이공" },
      { text: "발렌타인에 분위기 좋고 코스 구성 훌륭. 와인 페어링 추천!", rating: 4.8, date: "2026-02-14", restaurantName: "리스토란테 벨라" },
    ],
    coupons: [
      { name: "단골 할인", discountRate: "15%", expiryDate: "2026-04-30", restaurantName: "트라토리아 모리", code: "JIEUN15" },
      { name: "런치 특가", discountRate: "20%", expiryDate: "2026-04-20", restaurantName: "스시오마카세 하루", code: "LUNCH20" },
      { name: "첫 방문 할인", discountRate: "10%", expiryDate: "2026-05-15", restaurantName: "성수 브런치 카페", code: "FIRST10" },
    ],
  },

  // ─── user-002: 박준혁 ──────────────────────────────
  "user-002": {
    taste: {
      scores: { spicy: 25, sweet: 82, salty: 50, sour: 35, umami: 60, oily: 75 },
      preferredCategories: ["양식", "카페", "멕시칸", "분식"],
      summary:
        "달콤하고 든든한 음식을 좋아하는 타입! 버거, 파스타, 디저트를 자주 찾고, 매운 건 잘 못 먹어요.",
    },
    favoriteAreas: ["홍대", "연남"],
    visits: [
      { date: "2026-04-06", restaurantName: "버거앤프라이즈", menu: "클래식 치즈버거, 감자튀김", rating: 4.4 },
      { date: "2026-04-02", restaurantName: "홍대 타코 하우스", menu: "타코 3종 세트", rating: 4.1 },
      { date: "2026-03-30", restaurantName: "연남 로스터리", menu: "플랫 화이트, 당근 케이크", rating: 4.6 },
      { date: "2026-03-22", restaurantName: "버거앤프라이즈", menu: "BBQ 베이컨 버거", rating: 4.5 },
      { date: "2026-03-10", restaurantName: "프론트엔드 파스타", menu: "로제 파스타, 갈릭브레드", rating: 4.3 },
      { date: "2026-02-28", restaurantName: "홍대 분식왕", menu: "치즈 떡볶이, 순대", rating: 3.8 },
      { date: "2026-02-15", restaurantName: "연남 로스터리", menu: "아메리카노, 티라미수", rating: 4.7 },
    ],
    reviews: [
      { text: "버거 패티 육즙 미쳤고 감튀 바삭함 ㅋㅋ 퇴근길 단골됨", rating: 4.4, date: "2026-04-06", restaurantName: "버거앤프라이즈" },
      { text: "타코 양이 좀 적긴 한데 맛은 괜찮음. 살사가 안 매워서 다행", rating: 4.1, date: "2026-04-02", restaurantName: "홍대 타코 하우스" },
      { text: "여기 당근 케이크 진짜 맛있어요... 커피도 산미 적고 좋음", rating: 4.6, date: "2026-03-30", restaurantName: "연남 로스터리" },
      { text: "로제 파스타 크림이 진하고 가성비 괜찮. 점심 세트 추천", rating: 4.3, date: "2026-03-10", restaurantName: "프론트엔드 파스타" },
    ],
    coupons: [
      { name: "버거 세트 할인", discountRate: "15%", expiryDate: "2026-04-25", restaurantName: "버거앤프라이즈", code: "BURGER15" },
      { name: "음료 사이즈업", discountRate: "사이즈업 무료", expiryDate: "2026-05-01", restaurantName: "연남 로스터리", code: "SIZEUP" },
      { name: "타코 1+1", discountRate: "1+1", expiryDate: "2026-04-15", restaurantName: "홍대 타코 하우스", code: "TACO11" },
      { name: "분식 세트 할인", discountRate: "20%", expiryDate: "2026-04-30", restaurantName: "홍대 분식왕", code: "BUNSIK20" },
    ],
  },

  // ─── user-003: 이수현 ──────────────────────────────
  "user-003": {
    taste: {
      scores: { spicy: 65, sweet: 60, salty: 70, sour: 55, umami: 75, oily: 45 },
      preferredCategories: ["한식", "중식", "퓨전", "일식"],
      summary:
        "균형 잡힌 미각의 소유자! 전통 한식부터 퓨전까지 폭넓게 즐기며, 숨은 맛집 발굴을 좋아해요.",
    },
    favoriteAreas: ["을지로", "여의도", "종로"],
    visits: [
      { date: "2026-04-07", restaurantName: "을지로 골목식당", menu: "제육볶음 백반", rating: 4.3 },
      { date: "2026-04-03", restaurantName: "종로 마라탕", menu: "마라샹궈 (중간맛)", rating: 4.4 },
      { date: "2026-03-29", restaurantName: "여의도 스시 사카바", menu: "모둠회, 사케", rating: 4.6 },
      { date: "2026-03-25", restaurantName: "을지로 퓨전 한식", menu: "트러플 비빔밥, 유자 막걸리", rating: 4.8 },
      { date: "2026-03-18", restaurantName: "을지로 노포 냉면", menu: "물냉면", rating: 4.5 },
      { date: "2026-03-08", restaurantName: "여의도 한정식 가온", menu: "점심 한정식 코스", rating: 4.7 },
      { date: "2026-02-22", restaurantName: "을지로 골목식당", menu: "김치찌개 백반", rating: 4.1 },
      { date: "2026-02-10", restaurantName: "종로 마라탕", menu: "마라탕 (약간맛)", rating: 4.2 },
    ],
    reviews: [
      { text: "을지로 골목의 정취가 그대로 담긴 한 그릇. 제육의 매콤달콤한 양념이 밥 한 공기를 순식간에 비우게 만든다. 반찬 구성도 알차다.", rating: 4.3, date: "2026-04-07", restaurantName: "을지로 골목식당" },
      { text: "트러플 향이 은은하게 비빔밥 위에 내려앉고, 참기름과 절묘하게 어우러진다. 유자 막걸리와의 페어링은 이 집만의 시그니처.", rating: 4.8, date: "2026-03-25", restaurantName: "을지로 퓨전 한식" },
      { text: "50년 전통의 맛이란 이런 것. 면발의 쫄깃함과 육수의 깊이가 다르다. 여름 아니어도 찾게 되는 곳.", rating: 4.5, date: "2026-03-18", restaurantName: "을지로 노포 냉면" },
      { text: "한정식의 정수를 보여주는 코스. 전채부터 후식까지 하나도 빠짐없이 정성스럽다. 접대용으로도 손색없는 공간.", rating: 4.7, date: "2026-03-08", restaurantName: "여의도 한정식 가온" },
      { text: "마라샹궈의 향신료 밸런스가 좋다. 중간맛인데도 깊은 맛이 살아있어서 자꾸 손이 간다.", rating: 4.4, date: "2026-04-03", restaurantName: "종로 마라탕" },
    ],
    coupons: [
      { name: "단골 적립 쿠폰", discountRate: "10%", expiryDate: "2026-04-30", restaurantName: "을지로 골목식당", code: "EULJIRO10" },
      { name: "디너 코스 할인", discountRate: "15%", expiryDate: "2026-05-10", restaurantName: "여의도 한정식 가온", code: "GAON15" },
      { name: "마라탕 토핑 추가", discountRate: "토핑 2종 무료", expiryDate: "2026-04-20", restaurantName: "종로 마라탕", code: "MALA2" },
    ],
  },

  // ─── user-004: 최하린 ──────────────────────────────
  "user-004": {
    taste: {
      scores: { spicy: 92, sweet: 30, salty: 58, sour: 50, umami: 65, oily: 60 },
      preferredCategories: ["베트남", "중식", "한식", "멕시칸"],
      summary:
        "매운맛 마니아! 마라탕, 떡볶이, 베트남 음식을 사랑하고, 가성비를 중시하는 알뜰 미식가예요.",
    },
    favoriteAreas: ["성수", "건대"],
    visits: [
      { date: "2026-04-05", restaurantName: "성수 마라탕 골목", menu: "마라탕 (매운맛), 꿔바로우", rating: 4.3 },
      { date: "2026-04-01", restaurantName: "반미 사이공", menu: "분짜, 반미", rating: 4.4 },
      { date: "2026-03-27", restaurantName: "건대 엽떡", menu: "오리지널 엽기떡볶이", rating: 4.0 },
      { date: "2026-03-19", restaurantName: "성수 마라탕 골목", menu: "마라샹궈 (극한맛)", rating: 4.6 },
      { date: "2026-03-12", restaurantName: "홍대 타코 하우스", menu: "할라피뇨 치킨 타코", rating: 4.2 },
      { date: "2026-02-25", restaurantName: "건대 곱창거리", menu: "매운 곱창, 소주", rating: 4.5 },
      { date: "2026-02-11", restaurantName: "반미 사이공", menu: "쌀국수 (곱빼기)", rating: 4.1 },
    ],
    reviews: [
      { text: "마라탕 매운맛 레벨 최고 ㄷㄷ 땀 뻘뻘인데 또 먹고 싶음 가격도 착함!", rating: 4.3, date: "2026-04-05", restaurantName: "성수 마라탕 골목" },
      { text: "분짜 소스 달달매콤 조합 굿. 반미도 가성비 좋고 점심에 딱", rating: 4.4, date: "2026-04-01", restaurantName: "반미 사이공" },
      { text: "엽떡은 엽떡이지... 매울 때 먹으면 스트레스 풀림 ㅋㅋ 가성비 최고", rating: 4.0, date: "2026-03-27", restaurantName: "건대 엽떡" },
      { text: "극한맛 도전 성공! 혀가 얼얼한데 중독성 있음. 꿔바로우랑 같이 먹으면 밸런스 맞음", rating: 4.6, date: "2026-03-19", restaurantName: "성수 마라탕 골목" },
    ],
    coupons: [
      { name: "마라탕 할인", discountRate: "15%", expiryDate: "2026-04-25", restaurantName: "성수 마라탕 골목", code: "MALA15" },
      { name: "곱빼기 무료", discountRate: "곱빼기 무료", expiryDate: "2026-05-01", restaurantName: "반미 사이공", code: "EXTRA0" },
      { name: "타코 할인", discountRate: "10%", expiryDate: "2026-04-20", restaurantName: "홍대 타코 하우스", code: "TACO10" },
      { name: "떡볶이 세트", discountRate: "20%", expiryDate: "2026-04-30", restaurantName: "건대 엽떡", code: "YUPDDUK20" },
    ],
  },
};

// ── 공유 레스토랑 풀 ───────────────────────────────────

const restaurantPool: RestaurantPoolItem[] = [
  // 강남 (4)
  { name: "스시오마카세 하루", photoUrl: "https://placehold.co/300x200/d0d8e8/333?text=Sushi", rating: 4.8, description: "신선한 제철 생선으로 만드는 오마카세 코스", category: "일식", area: "강남", moods: ["데이트", "회식"] },
  { name: "트라토리아 모리", photoUrl: "https://placehold.co/300x200/e8d5b7/333?text=Italian", rating: 4.7, description: "수제 파스타와 화덕 피자가 맛있는 정통 이탈리안", category: "이탈리안", area: "강남", moods: ["데이트", "회식"] },
  { name: "리스토란테 벨라", photoUrl: "https://placehold.co/300x200/f0e0c8/333?text=Fine+Italian", rating: 4.8, description: "파인다이닝 이탈리안, 와인 페어링 코스가 인기", category: "이탈리안", area: "강남", moods: ["데이트"] },
  { name: "강남 한우 오마카세", photoUrl: "https://placehold.co/300x200/e8c8c8/333?text=Hanwoo", rating: 4.6, description: "1++ 등급 한우를 코스로 즐기는 프리미엄 한식", category: "한식", area: "강남", moods: ["데이트", "회식"] },

  // 홍대/연남 (4)
  { name: "버거앤프라이즈", photoUrl: "https://placehold.co/300x200/e8d0d0/333?text=Burger", rating: 4.4, description: "수제 패티와 크래프트 맥주의 조합", category: "양식", area: "홍대", moods: ["혼밥", "야식"] },
  { name: "홍대 타코 하우스", photoUrl: "https://placehold.co/300x200/e8e0b0/333?text=Taco", rating: 4.2, description: "정통 멕시칸 타코와 나초, 살사 바", category: "멕시칸", area: "홍대", moods: ["혼밥", "야식"] },
  { name: "연남 로스터리", photoUrl: "https://placehold.co/300x200/d8c8b0/333?text=Cafe", rating: 4.6, description: "직접 로스팅한 스페셜티 커피와 수제 디저트", category: "카페", area: "홍대", moods: ["혼밥", "브런치"] },
  { name: "홍대 분식왕", photoUrl: "https://placehold.co/300x200/e8b8b8/333?text=Bunsik", rating: 3.9, description: "떡볶이·순대·튀김 세트의 정석, 학생 맛집", category: "분식", area: "홍대", moods: ["혼밥", "야식"] },

  // 성수/건대 (4)
  { name: "성수 브런치 카페", photoUrl: "https://placehold.co/300x200/c8e8c8/333?text=Brunch", rating: 4.5, description: "에그 베네딕트와 아보카도 토스트가 인기인 감성 카페", category: "카페", area: "성수", moods: ["브런치", "데이트"] },
  { name: "성수 마라탕 골목", photoUrl: "https://placehold.co/300x200/e8b0b0/333?text=Mala", rating: 4.4, description: "마라탕·마라샹궈 전문, 매운맛 5단계 선택", category: "중식", area: "성수", moods: ["혼밥", "야식"] },
  { name: "건대 엽떡", photoUrl: "https://placehold.co/300x200/e88888/333?text=Tteok", rating: 4.0, description: "매운맛 떡볶이의 성지, 가성비 최고", category: "분식", area: "성수", moods: ["혼밥", "야식"] },
  { name: "건대 곱창거리", photoUrl: "https://placehold.co/300x200/d8b888/333?text=Gopchang", rating: 4.5, description: "불맛 나는 매운 곱창과 막창, 소주 맛집", category: "한식", area: "성수", moods: ["회식", "야식"] },

  // 을지로/종로 (3)
  { name: "을지로 골목식당", photoUrl: "https://placehold.co/300x200/d4e8d0/333?text=Korean", rating: 4.3, description: "혼밥하기 좋은 아늑한 한식 백반집", category: "한식", area: "을지로", moods: ["혼밥", "브런치"] },
  { name: "을지로 퓨전 한식", photoUrl: "https://placehold.co/300x200/c8d8c0/333?text=Fusion", rating: 4.7, description: "트러플 비빔밥, 유자 막걸리 등 전통+현대의 만남", category: "퓨전", area: "을지로", moods: ["데이트", "회식"] },
  { name: "을지로 노포 냉면", photoUrl: "https://placehold.co/300x200/d0d0e8/333?text=Naengmyeon", rating: 4.5, description: "50년 전통 물냉면·비빔냉면 전문점", category: "한식", area: "을지로", moods: ["혼밥"] },
  { name: "종로 마라탕", photoUrl: "https://placehold.co/300x200/e0b0b0/333?text=Mala+Jongro", rating: 4.3, description: "향신료 밸런스가 좋은 마라탕·마라샹궈", category: "중식", area: "을지로", moods: ["혼밥", "야식"] },

  // 여의도 (3)
  { name: "여의도 한정식 가온", photoUrl: "https://placehold.co/300x200/e0d8c0/333?text=Hanjeongsik", rating: 4.7, description: "전채부터 후식까지 정성스러운 한정식 코스", category: "한식", area: "여의도", moods: ["데이트", "회식"] },
  { name: "여의도 스시 사카바", photoUrl: "https://placehold.co/300x200/c0c8e0/333?text=Sushi+Bar", rating: 4.5, description: "모둠회와 사케를 캐주얼하게 즐기는 이자카야", category: "일식", area: "여의도", moods: ["회식", "야식"] },
  { name: "프론트엔드 파스타", photoUrl: "https://placehold.co/300x200/e0d0e0/333?text=Pasta", rating: 4.3, description: "점심 세트가 가성비 좋은 파스타 전문점", category: "이탈리안", area: "여의도", moods: ["혼밥", "브런치"] },

  // 베트남 (여러 지역)
  { name: "반미 사이공", photoUrl: "https://placehold.co/300x200/e8e0d0/333?text=Vietnamese", rating: 4.3, description: "정통 베트남 반미와 쌀국수 전문점", category: "베트남", area: "성수", moods: ["혼밥", "브런치"] },
];

// ── Lookup 함수 ────────────────────────────────────────

export function getUserData(userId: string): UserData | undefined {
  return allUserData[userId];
}

export function getRestaurantPool(): RestaurantPoolItem[] {
  return restaurantPool;
}
