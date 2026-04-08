# Design Plan — Screen 3: 내 입맛 프로필

## 기본 정보
- Feature: taste-profile
- 화면: Screen 3 — 내 입맛 프로필 ("나 이런 사람이었어?")
- 분석 모드: 와이어프레임 (레이아웃·기능·콘텐츠만 참고, 스타일은 기존 디자인 시스템)
- 날짜: 2026-04-08
- 디자인 소스: 업로드 스크린샷
- 참조 소스: Montage UI 실물 탐색 (`@montage-ui/core` v4.0.0, `@montage-ui/icon`)
- 관련 Screen Plan: screen-plans/01_첫-프로필-생성-열람.md

---

## 화면 조립 구조

```
Screen: 내 입맛 프로필 — "나 이런 사람이었어?" (Screen 3)
│
├── GNB ✅ — 기존 GlobalNavBar.tsx 재사용
│
├── HeroSection
│   ├── HeroLayout ✅ — FlexBox direction="row" (좌: 이미지, 우: 텍스트)
│   │   ├── HeroImage 🆕 — Thumbnail ratio="1:1" + rounded-2xl, AI 생성 일러스트
│   │   └── HeroText ✅ — FlexBox direction="column"
│   │       ├── Label("ANALYSIS RESULT") ✅ — Typography variant="label1" weight="bold" color="semantic.primary.normal"
│   │       ├── Title("매운맛\n모험가") ✅ — Typography variant="display2" weight="bold"
│   │       ├── Description ✅ — Typography variant="body1" color="semantic.label.alternative"
│   │       └── TypeBadge("Top 3% Spicy Lover") ✅ — ContentBadge variant="solid" color="neutral"
│   └── ScrollHint("당신을 위한 맞춤 맛집 12곳을 찾았어요.") ✅ — Typography + IconChevronDown
│
├── InsightSection
│   ├── SectionDecoHeader("맛의 데이터가 말하는 당신") 🆕 — Typography variant="title2" weight="bold" align="center" + 블루 바 데코
│   │
│   ├── InsightGrid ✅ — Grid spacing={24}, 2×2 레이아웃
│   │
│   │   ├── InsightCard: [익숙한 나] 🆕
│   │   │   ├── CardHeader ✅ — Typography heading2 bold + caption1 서브타이틀("최근 6개월 데이터 기반")
│   │   │   ├── DonutChart 🆕 — 커스텀 SVG (한식 62%, 일식, 기타 분포)
│   │   │   ├── PriceBar ✅ — ProgressIndicator percent={85} + Typography label ("~1.5만원 (데일리)")
│   │   │   ├── PriceBar ✅ — ProgressIndicator percent={40} + Typography label ("1.5~3만원 (미드레인지)")
│   │   │   ├── LocationLabel ✅ — Typography caption1 ("주요 활동 지역")
│   │   │   └── LocationTags ✅ — Chip size="small" variant="outlined" × 3 (#강남역, #성수동, #판교)
│   │   │
│   │   ├── InsightCard: [의외의 나] 🆕
│   │   │   ├── CardHeader ✅ — Typography heading2 bold
│   │   │   ├── HeatmapLabel ✅ — Typography caption1 ("금요일 저녁 마켓 HEATMAP")
│   │   │   ├── HeatmapGrid 🆕 — 커스텀 CSS Grid (7일×3시간대), 셀 = div + atomic-blue opacity 단계
│   │   │   └── InsightText ✅ — Typography body2 (금요일 패턴 해석 카피)
│   │   │
│   │   ├── InsightCard: [핵심의 나] 🆕
│   │   │   ├── CardHeader ✅ — Typography heading2 bold
│   │   │   ├── RadarChart 🆕 — 커스텀 SVG (5축: 매운맛/짠맛/단맛/신맛/감칠맛) + 축 라벨 Typography
│   │   │   ├── MenuLabel ✅ — Typography label1 bold ("SIGNATURE MENU")
│   │   │   └── SignatureMenu 🆕 — FlexBox + Thumbnail ratio="1:1" 작은 사이즈 + Typography (메뉴명, 주문횟수)
│   │   │
│   │   └── InsightCard: 숨은 취향 키워드
│   │       ├── CardHeader ✅ — Typography heading2 bold + caption1 서브타이틀("당신의 무의식이 선택한 붙이기")
│   │       ├── TagCloud 🆕 — Chip size 혼합 (large/medium/small), variant solid/outlined 혼합
│   │       └── InsightFooter ✅ — IconPin + Typography caption1 ("당신은 맛집보다는 '공간의 무드'를 중요하게 생각하시네요!")
│   │
├── RecommendSection
│   ├── SectionTitle ✅ — Typography variant="title2" weight="bold" ("매운맛 러버 1%인 당신을 위한 추천")
│   ├── SectionSubtitle ✅ — Typography variant="body2" color="semantic.label.alternative" ("분석된 취향을 바탕으로 엄선한 장소들입니다.")
│   │
│   └── CardRow ✅ — Grid spacing={24}, 3컬럼
│       └── RestaurantCard ✅ 변형 — Card + 하위 컴포넌트 조합 (× 3)
│           ├── CardThumbnail ratio="3:2" ✅
│           │   └── CardThumbnailContent ✅ — ContentBadge (추천 태그, accentColor 커스텀)
│           ├── CardTitle ✅ — 레스토랑 이름 ("화염 키친", "스시 절", "레드페퍼 비스트로")
│           ├── CardCaption ✅ — "서울 강남구 · 한식"
│           └── CardContent ✅ — FlexBox justify="space-between"
│               ├── Rating ✅ — IconStarFill color="semantic.status.cautionary" + Typography label1 bold + Typography caption1 color="semantic.label.assistive"
│               └── BookmarkButton ✅ — IconButton variant="normal" + IconBookmarkFill
│
└── Footer ✅ — 기존 Screen 1 Footer 재사용
    ├── Logo("Taste Profile") ✅ — Typography heading2 bold
    ├── LinkGroup ✅ — TextButton × 3 ("PRIVACY POLICY", "TERMS OF SERVICE", "CONTACT")
    └── Copyright ✅ — Typography caption1

커버리지: 전체 35개 노드 — ✅ 22개 (63%) / ✅ 변형 1개 (3%) / 🆕 12개 (34%)
```

---

## 신규 항목 상세

### 1. InsightCard (공통 컨테이너)
- **역할:** 인사이트 카드의 공통 래퍼. 보더 + 라운딩 + 패딩
- **Props:** `title: string`, `subtitle?: string`, `children: ReactNode`
- **구현:** `div` + `border: 1px solid var(--semantic-line-neutral)` + `rounded-2xl` + `p-6`
- **내부:** `Typography heading2 bold` (타이틀) + `Typography caption1` (서브타이틀) + children
- **기존 시스템과의 관계:** Montage `Card`는 thumbnail+title 패턴에 최적화. 데이터 대시보드 카드에는 커스텀 래퍼가 더 적합
- **재사용성:** 이 화면 4개 카드 + 향후 인사이트 추가 가능

### 2. SectionDecoHeader
- **역할:** 중앙 정렬 섹션 타이틀 + 하단 파란 바 장식
- **Props:** `title: string`, `barColor?: string`
- **구현:** `Typography variant="title2" weight="bold" align="center"` + 하단 `div` (width: 32px, height: 3px, background: `var(--semantic-primary-normal)`, margin: auto)
- **기존 시스템과의 관계:** Montage `SectionHeader`는 좌측 정렬 + trailing 액션 패턴. 중앙 정렬 + 데코 바에는 맞지 않아 커스텀 조합
- **재사용성:** 이 화면 전용

### 3. DonutChart
- **역할:** 카테고리 분포 (한식 62%, 일식, 기타)를 도넛 차트로 시각화
- **Props:** `data: Array<{ label: string, value: number, color: string }>`, `centerLabel?: string`, `centerValue?: string`
- **구현:** 커스텀 SVG `<circle>` + `stroke-dasharray`/`stroke-dashoffset`로 세그먼트 생성. 중앙에 Typography로 퍼센트 표시
- **색상:** `var(--atomic-blue-50)` (한식), `var(--atomic-cool-neutral-70)` (일식), `var(--atomic-cool-neutral-85)` (기타) — Montage atomic 토큰 활용
- **기존 시스템과의 관계:** Montage에 차트 컴포넌트 없음. SVG + Montage Typography/색상 토큰 조합
- **재사용성:** 분포 데이터 시각화에 범용 사용 가능

### 4. HeatmapGrid
- **역할:** 요일(월~일) × 시간대(오전/오후/저녁) 히트맵
- **Props:** `data: number[][]`, `rowLabels: string[]`, `colLabels: string[]`, `highlightColor?: string`
- **구현:** CSS Grid (`grid-template-columns: repeat(7, 1fr)`, 3행), 각 셀은 `div` + `rounded-md` + 배경색 opacity 단계별 적용. 기본 셀: `var(--atomic-cool-neutral-95)`, 활성 셀: `var(--atomic-blue-95)`~`var(--atomic-blue-50)` intensity에 따라
- **기존 시스템과의 관계:** Montage `Grid`는 12컬럼 레이아웃용. CSS Grid 직접 사용 + atomic 컬러 토큰 활용
- **재사용성:** 이 화면 전용

### 5. RadarChart
- **역할:** 5축 맛 성향 (매운맛/짠맛/단맛/신맛/감칠맛) 레이더 차트
- **Props:** `data: Array<{ axis: string, value: number }>`, `maxValue?: number`
- **구현:** 커스텀 SVG — 배경 오각형(가이드라인) `<polygon>` + 데이터 영역 `<polygon fill="var(--atomic-blue-50)" opacity={0.3}>` + 꼭짓점 `<circle>` + 축 라벨 `<text>` (또는 absolute positioned Typography)
- **기존 시스템과의 관계:** Montage에 없음. SVG + Montage 토큰
- **재사용성:** 이 화면 전용 (향후 비교 기능 시 확장 가능)

### 6. SignatureMenu
- **역할:** 시그니처 메뉴 리스트 (음식 이미지 + 메뉴명 + 주문 횟수)
- **Props:** `items: Array<{ image: string, name: string, count: number, rank: number }>`
- **구현:** `FlexBox direction="column" gap={12}` + 각 아이템: `FlexBox direction="row" alignItems="center" gap={12}` + `Thumbnail ratio="1:1"` (width: 48px, border, radius) + `div`(`Typography body2 bold` 메뉴명 + `Typography caption1 color="semantic.label.assistive"` 횟수)
- **기존 시스템과의 관계:** Montage `Thumbnail` + `Typography` 직접 조합
- **재사용성:** 이 화면 전용

### 7. TagCloud
- **역할:** 숨은 취향 키워드를 크기/스타일 다르게 배치
- **Props:** `tags: Array<{ text: string, weight: 1 | 2 | 3 }>` (weight가 클수록 강조)
- **구현:** `FlexBox wrap="wrap" justifyContent="center" gap={8}` + `Chip` 매핑:
  - weight 3: `Chip size="large" variant="solid"` (primary 색상 오버라이드)
  - weight 2: `Chip size="medium" variant="outlined"`
  - weight 1: `Chip size="small" variant="outlined"` (color assistive)
- **기존 시스템과의 관계:** Montage `Chip` 직접 활용. size/variant 조합으로 시각적 강약 표현
- **재사용성:** 키워드 시각화 범용 사용 가능

### 변형 항목

| 기존 컴포넌트 | 필요한 변형 | 방법 |
|-------------|-----------|------|
| `Card` (RestaurantCard) | CardThumbnailContent에 ContentBadge 오버레이 + 하단 rating/bookmark 레이아웃 | Montage Card 하위 컴포넌트 조합으로 구현 가능. ContentBadge의 accentColor를 카드별로 다르게 지정 (강력추천: `atomic.red.50`, 금요일밤: `atomic.blue.50`, 숨은명소: `atomic.green.50`) |

---

## 미해결 항목

| 항목 | 영향 범위 | 블로커 여부 | 확인 방법 |
|------|----------|-----------|----------|
| AI 생성 비주얼 에셋 | HeroImage | 나중 가능 (placeholder 진행) | 디자이너/AI팀 |
| 레스토랑 추천 카드 데이터 형식 | RestaurantCard props | 나중 가능 | 백엔드 API 스펙 |
| ContentBadge 추천태그 색상 매핑 | 3개 태그 각각 다른 색 | 나중 가능 | 스크린샷 기준 추정 적용 |
| 히트맵 하이라이트 기준 | HeatmapGrid | 나중 가능 | 스크린샷 기준 1셀 진하게 처리 |
| 시그니처 메뉴 이미지 에셋 | SignatureMenu | 나중 가능 (placeholder) | 실 데이터 연동 시 |

블로커 없음 — 모두 placeholder로 진행 가능.

---

## 구현 단계

### 단계 1: 준비 — 공통 래퍼 & Montage 패턴 확인
- `InsightCard` 공통 컨테이너 작성 (`div` + border/radius/padding + Typography 타이틀)
- `SectionDecoHeader` 작성 (중앙 정렬 Typography + 블루 바)
- `ContentBadge` accentColor 커스텀 패턴 확인 (추천 태그 3종 색상)
- **사용 Montage:** `Typography`, `ContentBadge`, `Chip`, `FlexBox`
- **완료 기준:** InsightCard, SectionDecoHeader 단독 렌더링 확인

### 단계 2: 데이터 시각화 컴포넌트
- `DonutChart` — SVG circle + stroke-dasharray + Montage Typography 중앙 텍스트
- `RadarChart` — SVG polygon + 축선 + Montage Typography 라벨
- `HeatmapGrid` — CSS Grid + atomic 컬러 토큰 opacity 단계
- `TagCloud` — Montage `Chip` size/variant 조합
- `SignatureMenu` — Montage `Thumbnail` + `Typography` 조합
- **완료 기준:** 각 컴포넌트에 더미 데이터 넣어서 단독 렌더링 확인

### 단계 3: 섹션별 조립
- **히어로 섹션:** `FlexBox` 2단 (좌: `Thumbnail` 1:1 + rounded-2xl, 우: Typography 스택 + `ContentBadge`) + 스크롤 힌트 (`Typography` + `IconChevronDown`)
- **인사이트 섹션:** `SectionDecoHeader` + `Grid` 2×2 (각 `InsightCard` + 내부 시각화 컴포넌트)
- **추천 섹션:** Typography 타이틀/서브타이틀 + `Grid` 3컬럼 × `Card` (`CardThumbnail` ratio="3:2" + `CardThumbnailContent`(ContentBadge) + `CardTitle` + `CardCaption` + rating `FlexBox`)
- **Footer:** Screen 1 것 재사용
- **완료 기준:** 전체 페이지 스크롤 시 디자인 구조와 일치

### 단계 4: 인터랙션 & 폴리싱
- 스크롤 힌트 클릭 → 인사이트 섹션으로 smooth scroll
- 추천 카드 hover 효과 (Montage `Card` 기본 hover 활용)
- 북마크 `IconButton` 토글 상태
- **완료 기준:** 인터랙션 동작 확인
