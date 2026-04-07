export interface PageEntry {
  label: string;
  path: string;
  description?: string;
}

const allPages: PageEntry[] = [
  { label: "랜딩 허브", path: "/", description: "프로토타입 탐색 메인" },
  {
    label: "Match Table",
    path: "/match-table",
    description: "레스토랑 디스커버리",
  },
  {
    label: "입맛 프로필",
    path: "/match-table/taste-profile",
    description: "사용자 입맛 분석",
  },
  { label: "AI 채팅", path: "/ai-chat", description: "AI 어시스턴트" },
];

// 페이지별 링크 목록 (키가 없으면 default 사용)
const pageConfigs: Record<string, PageEntry[]> = {
  default: allPages,
};

export function getPageList(pathname: string): PageEntry[] {
  return pageConfigs[pathname] ?? pageConfigs.default;
}
