# Montage UI 참조

Montage UI 컴포넌트나 디자인 토큰을 사용할 때는 `docs/montage-catalog.md`를 먼저 참조한다. node_modules 탐색 전에 이 파일에서 필요한 정보를 찾는다.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# CSS 아키텍처: Montage UI + Tailwind CSS 공존

이 프로젝트는 Montage UI와 Tailwind CSS v4를 함께 사용한다. 두 라이브러리의 CSS 충돌을 방지하기 위해 **CSS Cascade Layers**로 우선순위를 관리한다.

## 구조 (`src/app/globals.css`)

```css
@import "@montage-ui/core/global.css" layer(montage);
@import "@montage-ui/core/theme.css" layer(montage);
@import "tailwindcss";
```

## 우선순위

```
montage (낮음) → Tailwind base → components → utilities (높음)
```

- Montage CSS는 `layer(montage)`로 감싸져 있어 Tailwind 유틸리티보다 낮은 우선순위를 가진다.
- Montage의 글로벌 리셋(`border: 0` 등)이 Tailwind 유틸리티(`border`, `rounded-xl` 등)를 덮어쓰지 않는다.

## 규칙

- **Montage CSS import는 반드시 `globals.css`에서 `layer(montage)`로 감싸서 한다.** `layout.tsx`에서 직접 import하지 않는다.
- Montage 컴포넌트(`<Card>`, `<Button>` 등)는 정상 동작한다.
- Montage 컴포넌트에 Tailwind 클래스를 추가하면(`className="mt-4"`) Tailwind가 우선 적용된다.
- 새 CSS 라이브러리를 추가할 경우, 동일하게 `layer()`로 감싸서 Tailwind와 충돌하지 않도록 한다.

# 프로젝트 구조: 프로토타입 허브 패턴

이 프로젝트는 단일 서비스가 아니라 **프로토타입 탐색 환경**이다. 루트(`/`)는 서비스 페이지가 아니라 팀 협업을 위한 랜딩 허브이고, 각 프로토타입은 하위 라우트에서 독립적으로 동작한다.

## 라우팅 구조

```
/                    → 랜딩 허브 (팀 협업 메인, 프로토타입 진입점)
/match-table         → Match Table 메인 페이지 프로토타입
/match-table/...     → Match Table 하위 페이지들
/(다음 프로토타입)/    → 추후 추가되는 다른 프로토타입
```

## 폴더 구조

```
src/app/
├── page.tsx              ← 랜딩 허브 (절대 서비스 페이지로 교체하지 않는다)
├── layout.tsx
├── globals.css
├── providers.tsx
├── match-table/
│   └── page.tsx          ← Match Table 프로토타입
└── (다음 프로토타입)/
    └── page.tsx
```

## 랜딩 허브 (`src/app/page.tsx`)

template 레포의 LandingPage 패턴을 따른다:

- **좌측**: 리사이즈 가능한 팀 노트 패널 (협업 메모, 코드에서 직접 수정)
- **우측**: 카테고리별 네비게이션 그리드
  - **Project Documents** — 기획/설계 문서 링크
  - **Hand Off** — 완성된 기능
  - **Dev** — 개발 중인 프로토타입 (Functions / Flows / Tests)
  - **Deprecated** — 미사용 기능
- 각 항목은 `window.open('/route', '_blank')`로 새 탭에서 연다.

## 팀 노트 추가 규칙

팀 노트는 `src/app/page.tsx`의 `collabNotes` 배열에서 직접 관리한다.

- **최신순 정렬**: 새 메모는 배열의 **맨 앞**에 추가한다.
- **id**: 기존 최대값 + 1 (문자열).
- **author**: `DEFAULT_AUTHOR` 상수를 사용한다. 값이 비어 있으면(`""`) 사용자에게 이름을 물어본 뒤 설정한다.
- **message**: 변경 사항이나 공유할 내용을 간결하게 작성.
- **timestamp**: `YY/MM/DD(요일) 오전/오후` 형식 (예: `26/04/05(토) 오후`).
- **badge**: 필요 시 `'important'`(중요) 또는 `'info'`(참고) 지정. 일반 메모는 생략.

프로토타입을 추가하거나 주요 변경이 있을 때 팀 노트를 함께 업데이트한다.

## 새 프로토타입 추가 시

1. `src/app/(프로토타입명)/page.tsx` 생성
2. 랜딩 허브의 Dev 섹션에 `EntryButton` 추가 (variant를 `coming-soon`에서 `default`로 변경)
3. 프로토타입별 컴포넌트는 해당 라우트 폴더 또는 `src/components/` 하위에 배치
4. 플로팅 메뉴에 페이지 등록: `src/components/floating-menu/menu-config.ts`의 `allPages` 배열에 추가

# 플로팅 메뉴 (`FloatingMenu`)

모든 페이지에 글로벌로 렌더링되는 드래그 가능한 플로팅 버튼 + 패널 컴포넌트. 페이지 간 빠른 이동과 페이지별 메모를 제공한다.

## 파일 구조

```
src/components/floating-menu/
├── index.tsx             ← 클라이언트 래퍼 (dynamic import, ssr: false)
├── FloatingMenu.tsx      ← 메인 컴포넌트 (드래그 FAB + 패널 + 탭)
├── PageNavList.tsx       ← 탭1: 페이지 링크 목록
├── PageNotes.tsx         ← 탭2: 페이지별 메모 (조회/작성/삭제)
└── menu-config.ts        ← 페이지 링크 설정

src/data/
└── floating-menu-notes.json  ← 메모 데이터 (API가 읽고 씀)

src/app/api/floating-menu-notes/
└── route.ts              ← 메모 CRUD API (GET/POST/DELETE)
```

## 사용 방법

### FAB 버튼
- **클릭**: 패널 열기/닫기
- **드래그**: 화면 아무 곳으로 이동 가능 (위치는 localStorage에 저장, 새로고침해도 유지)

### 패널 탭
- **페이지 탭**: 등록된 프로토타입 페이지 목록. 클릭 시 같은 탭에서 이동. 현재 페이지는 "현재" 표시로 하이라이트.
- **메모 탭**: 현재 페이지에 대한 메모 조회/작성/삭제. 메모는 `src/data/floating-menu-notes.json`에 저장되며 git으로 팀 공유 가능.

### 숨기기/복원
- 패널 헤더의 눈 아이콘(EyeOff)으로 숨기기
- 숨기면 화면 오른쪽 가장자리에 얇은 미니 탭이 남음 → 클릭하면 FAB 복원

## 페이지 목록 관리 (`menu-config.ts`)

`allPages` 배열에 페이지를 추가/수정한다:

```ts
const allPages: PageEntry[] = [
  { label: "랜딩 허브", path: "/", description: "프로토타입 탐색 메인" },
  { label: "Match Table", path: "/match-table", description: "레스토랑 디스커버리" },
  // 새 페이지 추가 시 여기에 추가
];
```

페이지별로 다른 링크 목록을 보여주려면 `pageConfigs`에 경로별 설정을 추가한다. 미설정 경로는 `default`(= `allPages`)를 사용.

## 메모 관리

### UI에서 작성
1. FAB 클릭 → 메모 탭 선택
2. 하단 입력 폼에 메모 작성 → Enter 또는 전송 버튼
3. 작성자 이름은 우상단에서 설정 (localStorage에 기억)
4. 각 메모 hover 시 휴지통 아이콘으로 삭제

### JSON 파일 직접 편집
`src/data/floating-menu-notes.json`을 직접 수정해도 된다. 경로를 키로, 메모 배열을 값으로 관리:

```json
{
  "/match-table": [
    { "id": "1", "author": "유정", "text": "메모 내용", "timestamp": "26/04/08(화) 오후" }
  ]
}
```

### API 엔드포인트
- `GET /api/floating-menu-notes` — 전체 메모 조회
- `POST /api/floating-menu-notes` — 메모 추가 (`{ pathname, text, author }`)
- `DELETE /api/floating-menu-notes` — 메모 삭제 (`{ pathname, noteId }`)
