# Art Community Home Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Montage Design System을 활용한 아트 커뮤니티 홈 화면 프로토타입 구현

**Architecture:** 컴포넌트 분리형 — NavBar, HeroCard, ArtworkCard, ArtworkGrid를 독립 컴포넌트로 만들고, page.tsx에서 조합. 목 데이터는 별도 파일로 관리.

**Tech Stack:** Next.js 16 (App Router), React 19, @montage-ui/core, @montage-ui/icon, TypeScript

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/data/artworks.ts` | Artwork 타입 정의 + 목 데이터 10개 |
| `src/components/NavBar.tsx` | 상단 네비게이션 바 (client component) |
| `src/components/HeroCard.tsx` | 피처 작품 대형 카드 |
| `src/components/ArtworkCard.tsx` | 일반 작품 카드 |
| `src/components/ArtworkGrid.tsx` | 카드 그리드 레이아웃 |
| `src/app/page.tsx` | 홈 페이지 조합 (수정) |

---

### Task 1: 목 데이터 및 타입 정의

**Files:**
- Create: `src/data/artworks.ts`

- [ ] **Step 1: 타입과 목 데이터 작성**

```ts
// src/data/artworks.ts

export interface Artwork {
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

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Sunset Over the Mountains",
    imageUrl: "https://picsum.photos/seed/art1/800/600",
    artist: {
      name: "김서연",
      avatarUrl: "https://picsum.photos/seed/avatar1/100/100",
    },
    likes: 324,
    views: 1520,
  },
  {
    id: "2",
    title: "Urban Reflections",
    imageUrl: "https://picsum.photos/seed/art2/800/600",
    artist: {
      name: "이준호",
      avatarUrl: "https://picsum.photos/seed/avatar2/100/100",
    },
    likes: 218,
    views: 980,
  },
  {
    id: "3",
    title: "Whispers of Spring",
    imageUrl: "https://picsum.photos/seed/art3/800/600",
    artist: {
      name: "박지민",
      avatarUrl: "https://picsum.photos/seed/avatar3/100/100",
    },
    likes: 456,
    views: 2100,
  },
  {
    id: "4",
    title: "Neon Dreams",
    imageUrl: "https://picsum.photos/seed/art4/800/600",
    artist: {
      name: "최유나",
      avatarUrl: "https://picsum.photos/seed/avatar4/100/100",
    },
    likes: 189,
    views: 870,
  },
  {
    id: "5",
    title: "Ocean at Dawn",
    imageUrl: "https://picsum.photos/seed/art5/800/600",
    artist: {
      name: "정민수",
      avatarUrl: "https://picsum.photos/seed/avatar5/100/100",
    },
    likes: 567,
    views: 3200,
  },
  {
    id: "6",
    title: "Abstract Flow",
    imageUrl: "https://picsum.photos/seed/art6/800/600",
    artist: {
      name: "한소율",
      avatarUrl: "https://picsum.photos/seed/avatar6/100/100",
    },
    likes: 290,
    views: 1450,
  },
  {
    id: "7",
    title: "Forest Silence",
    imageUrl: "https://picsum.photos/seed/art7/800/600",
    artist: {
      name: "윤태영",
      avatarUrl: "https://picsum.photos/seed/avatar7/100/100",
    },
    likes: 412,
    views: 1890,
  },
  {
    id: "8",
    title: "City Lights",
    imageUrl: "https://picsum.photos/seed/art8/800/600",
    artist: {
      name: "강하은",
      avatarUrl: "https://picsum.photos/seed/avatar8/100/100",
    },
    likes: 178,
    views: 760,
  },
  {
    id: "9",
    title: "Golden Hour Portrait",
    imageUrl: "https://picsum.photos/seed/art9/800/600",
    artist: {
      name: "오승현",
      avatarUrl: "https://picsum.photos/seed/avatar9/100/100",
    },
    likes: 345,
    views: 1670,
  },
  {
    id: "10",
    title: "Memories in Blue",
    imageUrl: "https://picsum.photos/seed/art10/800/600",
    artist: {
      name: "서다영",
      avatarUrl: "https://picsum.photos/seed/avatar10/100/100",
    },
    likes: 231,
    views: 1100,
  },
];
```

- [ ] **Step 2: 빌드 확인**

Run: `npx next build 2>&1 | tail -5`
Expected: 빌드 성공 (데이터 파일만 추가, 아직 import하는 곳 없으므로)

- [ ] **Step 3: 커밋**

```bash
git add src/data/artworks.ts
git commit -m "feat: add artwork type and mock data"
```

---

### Task 2: NavBar 컴포넌트

**Files:**
- Create: `src/components/NavBar.tsx`

- [ ] **Step 1: NavBar 컴포넌트 작성**

```tsx
// src/components/NavBar.tsx
"use client";

import {
  TopNavigation,
  TopNavigationButton,
  SearchField,
  Avatar,
  AvatarButton,
  FlexBox,
  Typography,
} from "@montage-ui/core";
import { IconHome, IconPalette, IconHistory, IconSetting } from "@montage-ui/icon";

export default function NavBar() {
  return (
    <TopNavigation
      variant="normal"
      background
      leadingContent={
        <FlexBox alignItems="center" gap={8}>
          <Typography variant="heading1" weight="bold">
            Artfolio
          </Typography>
          <FlexBox alignItems="center" gap={4}>
            <TopNavigationButton variant="icon">
              <IconHome />
            </TopNavigationButton>
            <TopNavigationButton variant="icon">
              <IconPalette />
            </TopNavigationButton>
            <TopNavigationButton variant="icon">
              <IconHistory />
            </TopNavigationButton>
            <TopNavigationButton variant="icon">
              <IconSetting />
            </TopNavigationButton>
          </FlexBox>
        </FlexBox>
      }
      trailingContent={
        <FlexBox alignItems="center" gap={8}>
          <SearchField size="small" placeholder="Search artworks..." />
          <AvatarButton>
            <Avatar
              size="small"
              variant="person"
              src="https://picsum.photos/seed/me/100/100"
              alt="Profile"
            />
          </AvatarButton>
        </FlexBox>
      }
    />
  );
}
```

- [ ] **Step 2: 빌드 확인**

Run: `npx next build 2>&1 | tail -10`
Expected: 빌드 성공 (컴포넌트 파일만 추가, 아직 page에서 사용 안 함)

- [ ] **Step 3: 커밋**

```bash
git add src/components/NavBar.tsx
git commit -m "feat: add NavBar component with TopNavigation"
```

---

### Task 3: HeroCard 컴포넌트

**Files:**
- Create: `src/components/HeroCard.tsx`

- [ ] **Step 1: HeroCard 컴포넌트 작성**

```tsx
// src/components/HeroCard.tsx
import {
  Card,
  CardThumbnail,
  CardTitle,
  CardCaption,
  CardContent,
  Avatar,
  FlexBox,
  Typography,
} from "@montage-ui/core";
import { IconHeart, IconEye } from "@montage-ui/icon";
import { Artwork } from "@/data/artworks";

interface HeroCardProps {
  artwork: Artwork;
}

export default function HeroCard({ artwork }: HeroCardProps) {
  return (
    <Card width="100%">
      <CardThumbnail
        ratio="16:9"
        radius
        src={artwork.imageUrl}
        alt={artwork.title}
      />
      <CardContent gap={8} style={{ padding: "16px 0" }}>
        <CardTitle variant="title1" weight="bold">
          {artwork.title}
        </CardTitle>
        <FlexBox alignItems="center" justifyContent="space-between">
          <FlexBox alignItems="center" gap={8}>
            <Avatar
              size="small"
              variant="person"
              src={artwork.artist.avatarUrl}
              alt={artwork.artist.name}
            />
            <Typography variant="body1" color="semantic.label.neutral">
              {artwork.artist.name}
            </Typography>
          </FlexBox>
          <FlexBox alignItems="center" gap={12}>
            <FlexBox alignItems="center" gap={4}>
              <IconHeart />
              <Typography variant="label2" color="semantic.label.alternative">
                {artwork.likes.toLocaleString()}
              </Typography>
            </FlexBox>
            <FlexBox alignItems="center" gap={4}>
              <IconEye />
              <Typography variant="label2" color="semantic.label.alternative">
                {artwork.views.toLocaleString()}
              </Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 2: 빌드 확인**

Run: `npx next build 2>&1 | tail -10`
Expected: 빌드 성공

- [ ] **Step 3: 커밋**

```bash
git add src/components/HeroCard.tsx
git commit -m "feat: add HeroCard component for featured artwork"
```

---

### Task 4: ArtworkCard 컴포넌트

**Files:**
- Create: `src/components/ArtworkCard.tsx`

- [ ] **Step 1: ArtworkCard 컴포넌트 작성**

```tsx
// src/components/ArtworkCard.tsx
import {
  Card,
  CardThumbnail,
  CardTitle,
  CardContent,
  Avatar,
  FlexBox,
  Typography,
} from "@montage-ui/core";
import { IconHeart, IconEye } from "@montage-ui/icon";
import { Artwork } from "@/data/artworks";

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Card width="100%">
      <CardThumbnail
        ratio="4:3"
        radius
        src={artwork.imageUrl}
        alt={artwork.title}
      />
      <CardContent gap={6} style={{ padding: "12px 0" }}>
        <CardTitle variant="headline2" weight="bold">
          {artwork.title}
        </CardTitle>
        <FlexBox alignItems="center" justifyContent="space-between">
          <FlexBox alignItems="center" gap={6}>
            <Avatar
              size="xsmall"
              variant="person"
              src={artwork.artist.avatarUrl}
              alt={artwork.artist.name}
            />
            <Typography variant="label2" color="semantic.label.neutral">
              {artwork.artist.name}
            </Typography>
          </FlexBox>
          <FlexBox alignItems="center" gap={10}>
            <FlexBox alignItems="center" gap={4}>
              <IconHeart />
              <Typography variant="caption1" color="semantic.label.alternative">
                {artwork.likes.toLocaleString()}
              </Typography>
            </FlexBox>
            <FlexBox alignItems="center" gap={4}>
              <IconEye />
              <Typography variant="caption1" color="semantic.label.alternative">
                {artwork.views.toLocaleString()}
              </Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 2: 빌드 확인**

Run: `npx next build 2>&1 | tail -10`
Expected: 빌드 성공

- [ ] **Step 3: 커밋**

```bash
git add src/components/ArtworkCard.tsx
git commit -m "feat: add ArtworkCard component for grid items"
```

---

### Task 5: ArtworkGrid 컴포넌트

**Files:**
- Create: `src/components/ArtworkGrid.tsx`

- [ ] **Step 1: ArtworkGrid 컴포넌트 작성**

```tsx
// src/components/ArtworkGrid.tsx
import { Grid, GridItem } from "@montage-ui/core";
import ArtworkCard from "./ArtworkCard";
import { Artwork } from "@/data/artworks";

interface ArtworkGridProps {
  artworks: Artwork[];
}

export default function ArtworkGrid({ artworks }: ArtworkGridProps) {
  return (
    <Grid spacing="16" rowSpacing="24">
      {artworks.map((artwork) => (
        <GridItem key={artwork.id} columns={4}>
          <ArtworkCard artwork={artwork} />
        </GridItem>
      ))}
    </Grid>
  );
}
```

- [ ] **Step 2: 빌드 확인**

Run: `npx next build 2>&1 | tail -10`
Expected: 빌드 성공

- [ ] **Step 3: 커밋**

```bash
git add src/components/ArtworkGrid.tsx
git commit -m "feat: add ArtworkGrid component with 3-column layout"
```

---

### Task 6: 홈 페이지 조합

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: page.tsx를 컴포넌트들로 교체**

```tsx
// src/app/page.tsx
import { FlexBox } from "@montage-ui/core";
import NavBar from "@/components/NavBar";
import HeroCard from "@/components/HeroCard";
import ArtworkGrid from "@/components/ArtworkGrid";
import { artworks } from "@/data/artworks";

export default function Home() {
  const [featured, ...rest] = artworks;

  return (
    <FlexBox flexDirection="column" style={{ minHeight: "100vh" }}>
      <NavBar />
      <FlexBox
        as="main"
        flexDirection="column"
        gap={32}
        style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px", width: "100%" }}
      >
        <HeroCard artwork={featured} />
        <ArtworkGrid artworks={rest} />
      </FlexBox>
    </FlexBox>
  );
}
```

- [ ] **Step 2: 빌드 확인**

Run: `npx next build 2>&1 | tail -15`
Expected: 빌드 성공, `/` 라우트 정상 생성

- [ ] **Step 3: 개발 서버에서 시각적 확인**

Run: `npm run dev`
Expected: `http://localhost:3000`에서 NavBar + HeroCard + 3열 카드 그리드 표시

- [ ] **Step 4: 커밋**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble home page with NavBar, HeroCard, and ArtworkGrid"
```
