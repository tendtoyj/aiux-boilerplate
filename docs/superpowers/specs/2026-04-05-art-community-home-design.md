# Art Community Home Page Design Spec

## Overview

작가들이 본인 작품 이미지를 올리고 공유할 수 있는 커뮤니티 사이트의 홈 화면 프로토타입.
Montage Design System(`@montage-ui/core`) 컴포넌트를 활용한 컴포넌트 분리형 목업.

## Page Layout

```
NavBar (상단 고정)
├── Leading: Logo(텍스트) + Home / Arts / History / Setting
└── Trailing: SearchField + AvatarButton

HeroCard (전체 너비, 피처 작품 1개)
├── CardThumbnail (16:9 비율)
└── 제목 + 작가 아바타/이름 + 좋아요/조회수

ArtworkGrid (3열 균일 그리드)
└── ArtworkCard x 9~12개
    ├── CardThumbnail (4:3 비율)
    └── 제목 + 작가 아바타/이름 + 좋아요/조회수
```

## Data Model

```ts
interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  artist: {
    name: string;
    avatarUrl: string;
  };
  likes: number;
  views: number;
}
```

- 목 데이터 9~12개, `picsum.photos` placeholder 이미지 사용.
- `data/artworks.ts`에 하드코딩.

## Component Breakdown

### NavBar (`components/NavBar.tsx`)

- `TopNavigation` (variant="normal", background={true})
  - leadingContent: 로고 텍스트("Artfolio") + `TopNavigationButton` x 4 (Home, Arts, History, Setting)
  - trailingContent: `SearchField` (size="medium") + `AvatarButton` > `Avatar` (size="small", variant="person")
- Client component ("use client") — SearchField 인터랙션 필요.

### HeroCard (`components/HeroCard.tsx`)

- `Card` 전체 너비
- `CardThumbnail` ratio="16:9"
- 이미지 아래에 `CardTitle` + `FlexBox` (작가 `Avatar` + 이름 + 좋아요/조회수)
- Props: `artwork: Artwork`

### ArtworkCard (`components/ArtworkCard.tsx`)

- `Card` 컴포넌트
- `CardThumbnail` ratio="4:3"
- `CardTitle` 작품 제목
- `FlexBox`로 작가 `Avatar`(xsmall) + 이름 + 좋아요/조회수 배치
- Props: `artwork: Artwork`

### ArtworkGrid (`components/ArtworkGrid.tsx`)

- `Grid` + `GridItem` (columns={4}, 3열 그리드)
- Props: `artworks: Artwork[]`
- 각 `GridItem` 안에 `ArtworkCard` 렌더링

### Home Page (`app/page.tsx`)

- NavBar + HeroCard (첫 번째 artwork) + ArtworkGrid (나머지 artworks) 조합
- 목 데이터 import하여 전달

## Design Decisions

- **컴포넌트 분리형**: 재사용 및 향후 확장 고려
- **혼합형 레이아웃**: Hero 1개 + 균일 그리드
- **카드 정보 수준**: 중간 (이미지 + 제목 + 작가 아바타/이름 + 좋아요/조회수)
- **이미지**: placeholder(picsum.photos), 인터랙션 없는 정적 목업
- **로고**: 텍스트 기반 가제 "Artfolio"

## Tech Stack

- Next.js 16 (App Router)
- React 19
- @montage-ui/core (v4 pre-release)
- @montage-ui/icon (아이콘)
- @montage-ui/nextjs (SSR 통합)
- Wanted Sans (폰트)
