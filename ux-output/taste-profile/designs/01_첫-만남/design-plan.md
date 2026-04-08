# Design Plan — Screen 1: 첫 만남

## 기본 정보
- Feature: taste-profile
- 화면: Screen 1 — 첫 만남 ("이게 뭐지?")
- 분석 모드: 와이어프레임 (레이아웃·기능·콘텐츠만 참고, 스타일은 기존 디자인 시스템)
- 날짜: 2026-04-08
- 디자인 소스: 업로드 스크린샷
- 참조 소스: `docs/montage-catalog.md` (Montage UI v4.0.0)

---

## 화면 조립 구조

```
Screen: 첫 만남 — "이게 뭐지?" (Screen 1)
│
├── GNB ✅
│   ├── TopNavigation ✅
│   │   ├── Logo("The Precision Epicurean") ✅ — Typography as="a"
│   │   ├── NavItems ✅ — TopNavigationButton × 5
│   │   │   └── ActiveIndicator("Taste Profile") ✅ 변형 — 밑줄 활성 표시, CSS로 처리
│   │   └── IconButton(person) ✅ — IconPerson
│
├── HeroBanner 🆕 — 전체 너비 배경 이미지 섹션 (placeholder로 진행)
│
├── MainContent ✅ — FlexBox 또는 Grid columns={2}, containerStyle(maxWidth)
│   │
│   ├── LeftColumn ✅ — FlexBox direction="column"
│   │   ├── Headline ✅ — Typography variant="display2" weight="bold"
│   │   ├── Subcopy ✅ — Typography variant="body1"
│   │   ├── CTAButton ✅ 변형 — Button variant="solid" size="large", 블랙 컬러 커스텀
│   │   └── DataHighlight 🆕 — 라벨+숫자 가로 배치 (FlexBox + Typography + Divider 조합)
│   │       ├── StatItem("RESERVATIONS", 47) ✅ — Typography label1 + body1 bold
│   │       ├── Divider(vertical) ✅
│   │       ├── StatItem("REVIEWS", 12) ✅
│   │       ├── Divider(vertical) ✅
│   │       └── StatItem("SAVED PLACES", 83) ✅
│   │
│   └── RightColumn ✅ — FlexBox direction="column" gap
│       ├── StepCard(01) 🆕
│       │   ├── StepIcon ✅ — IconStar (반짝이 대체)
│       │   ├── StepNumber("01") ✅ — Typography variant="title2"
│       │   ├── StepTitle("1단계: AI 정밀 분석") ✅ — Typography variant="headline1" weight="bold"
│       │   └── StepDescription ✅ — Typography variant="body2"
│       ├── StepCard(02) 🆕
│       │   └── StepIcon ✅ — IconFilter (포크 대체)
│       └── StepCard(03) 🆕
│           └── StepIcon ✅ — IconShare
│
└── Footer 🆕 — 전체 너비 하단 영역
    ├── Logo ✅ — Typography
    ├── LinkGroup ✅ — FlexBox + TextButton × 4
    └── Copyright ✅ — Typography variant="caption1"

커버리지: 전체 20개 노드 — ✅ 13개 (65%) / ✅ 변형 2개 (10%) / 🆕 5개 (25%)
```

---

## 신규 항목 상세

### 1. HeroBanner
- **역할:** 전체 너비 배경 이미지 섹션. 화면 상단 ~40% 차지하며 감성적 분위기 조성
- **Props:** `src?: string`, `height?: string`, `overlay?: boolean`
- **기존 시스템과의 관계:** Montage에 해당 컴포넌트 없음. `<section>` + CSS background-image로 구현
- **재사용성:** Screen 1 전용
- **Note:** 이미지 에셋 확보 전까지 placeholder(그라데이션 또는 solid 배경)로 진행

### 2. DataHighlight
- **역할:** "RESERVATIONS 47 | REVIEWS 12 | SAVED PLACES 83" 형태의 데이터 수치 가로 배치
- **Props:** `items: Array<{ label: string, value: number }>`
- **기존 시스템과의 관계:** `FlexBox` + `Typography` + `Divider(vertical)` 조합
- **재사용성:** Screen 3 히어로 섹션의 핵심 수치에서도 유사 패턴 활용 가능

### 3. StepCard
- **역할:** 아이콘 + 번호 + 타이틀 + 설명을 담은 설명 카드. 서비스 프로세스를 3단계로 보여줌
- **Props:** `icon: ReactNode`, `stepNumber: string`, `title: string`, `description: string`
- **기존 시스템과의 관계:** Montage `Card`와 구조가 다름 (텍스트 중심). 커스텀 컴포넌트로 신규 생성. 배경: `semantic.background.normal.alternative`
- **재사용성:** Screen 1 전용 (일회성 온보딩 화면)
- **아이콘 매핑:** 01 → `IconStar`, 02 → `IconFilter`, 03 → `IconShare` (추후 커스텀 SVG로 교체 가능)

### 4. Footer
- **역할:** 로고 + 링크 + 저작권 하단 바
- **Props:** 없음 (정적 컴포넌트)
- **기존 시스템과의 관계:** `FlexBox justify="space-between"` + `Typography` + `Divider` 조합
- **재사용성:** 전체 서비스 공통. 별도 공통 컴포넌트로 분리 권장

### 변형 항목

| 기존 컴포넌트 | 필요한 변형 | 방법 |
|-------------|-----------|------|
| `Button` | 블랙 솔리드 variant | `className`으로 bg를 `semantic.label.normal`로 오버라이드 |
| `TopNavigationButton` | 활성 탭 밑줄 표시 | CSS `border-bottom` 스타일 추가 |

---

## 구현 단계

### 단계 1: 준비 — 공통 요소 & 변형
- GNB 컴포넌트 구성 (`TopNavigation` + 활성 탭 스타일)
- Footer 공통 컴포넌트 작성
- Button 블랙 variant 스타일 추가
- **완료 기준:** GNB, Footer 단독 렌더링 확인. 기존 사용처 영향 없음

### 단계 2: 신규 컴포넌트 개발
- `HeroBanner`: 전체 너비 배경 이미지 섹션 (placeholder 배경으로 시작)
- `DataHighlight`: 라벨+숫자 가로 배치 컴포넌트
- `StepCard`: 아이콘+번호+타이틀+설명 카드
- **완료 기준:** 각 컴포넌트 단독 렌더링 확인

### 단계 3: 화면 조립
- `Grid columns={2}` + `containerStyle`로 메인 레이아웃 (데스크탑 고정, 반응형은 추후 적용)
- 좌측: Headline + Subcopy + CTAButton + DataHighlight
- 우측: StepCard × 3
- 상단 GNB + 하단 Footer 배치
- **완료 기준:** 디자인 레이아웃과 구조적으로 일치, 기존 디자인 시스템 스타일 적용 확인

---

## 참고
- 이 화면은 Screen Plan의 Screen 1 "첫 만남" 사양에 해당
- GNB, Footer는 플로우 전체 공통 요소 → Screen 2, 3에서 재사용
- 반응형 대응은 데스크탑 구현 완료 후 별도 단계로 진행
- 히어로 이미지 에셋은 확보되는 대로 placeholder 교체
