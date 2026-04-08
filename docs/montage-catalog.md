# Montage UI Catalog (v4.0.0)

모든 컴포넌트는 `import { ComponentName } from '@montage-ui/core'`로 import한다.
아이콘은 `import { IconName } from '@montage-ui/icon'`으로 import한다.

---

## Components

### Form & Input

| Component | Key Props | 용도 |
|-----------|-----------|------|
| `Button` | variant, size, disabled, loading, onClick | 기본 버튼 |
| `TextButton` | variant, size, disabled | 텍스트만 있는 버튼 |
| `IconButton` | variant, size, disabled | 아이콘만 있는 버튼 |
| `TextField` | label, placeholder, disabled, error, value, onChange | 텍스트 입력 필드. `TextFieldButton`, `TextFieldContent` 하위 컴포넌트 |
| `TextArea` | label, placeholder, rows, maxLength | 멀티라인 텍스트 입력. `TextAreaContent` 하위 컴포넌트 |
| `SearchField` | placeholder, value, onChange | 검색 전용 입력 필드 |
| `Checkbox` | checked, onChange, disabled, label | 체크박스 |
| `RoundCheckbox` | checked, onChange, disabled | 원형 체크박스 |
| `RadioGroup` | value, onChange | 라디오 그룹. `RadioGroupItem` 하위 컴포넌트 |
| `Switch` | checked, onChange, disabled | 토글 스위치 |
| `Select` | value, onChange, placeholder | 셀렉트 드롭다운. `Option`, `OptionGroup`, `SelectContent` 하위 컴포넌트 |
| `SelectMultiple` | value, onChange | 다중 선택 셀렉트 |
| `Autocomplete` | value, onChange | 자동완성 입력. `AutocompleteField`, `AutocompleteList`, `AutocompleteOption`, `AutocompleteGroup` 하위 |
| `Slider` | value, onChange, min, max, step | 슬라이더 |
| `DatePicker` | value, onChange | 날짜 선택기 |
| `DateCalendar` | value, onChange | 달력 UI |
| `TimePicker` | value, onChange | 시간 선택기 |
| `FilterButton` | selected, onClick | 필터 토글 버튼 |
| `FormField` | name, control | 폼 필드 래퍼. `FormLabel`, `FormControl`, `FormMessage`, `FormErrorMessage` 하위 |

### Layout & Container

| Component | Key Props | 용도 |
|-----------|-----------|------|
| `FlexBox` | direction, align, justify, gap, wrap | Flex 레이아웃 컨테이너 |
| `Grid` | columns, gap | 그리드 레이아웃 |
| `GridItem` | column, row, span | 그리드 아이템 |
| `Card` | variant, platform | 카드 컨테이너. `CardThumbnail`, `CardThumbnailContent`, `CardTitle`, `CardCaption`, `CardContent`, `CardContentItem` 하위 |
| `CardList` | — | 카드 리스트 래퍼. `CardListContent` 하위 |
| `List` | — | 리스트 컨테이너 |
| `ListCell` | — | 리스트 셀. `ListCellContent` 하위 |
| `Table` | — | 테이블. `TableHead`, `TableBody`, `TableFoot`, `TableRow`, `TableCell`, `TableHeadCell` 하위 |
| `Accordion` | — | 아코디언. `AccordionSummary`, `AccordionSummaryContent`, `AccordionDetails`, `AccordionContent`, `AccordionDescription` 하위 |
| `Tab` | defaultValue | 탭 컨테이너. `TabList`, `TabListItem`, `TabPanel` 하위 |
| `Category` | — | 카테고리 탐색. `CategoryList`, `CategoryListItem`, `CategoryPanel` 하위 |
| `Divider` | variant, orientation | 구분선 |
| `ScrollArea` | — | 커스텀 스크롤 영역 |

### Navigation

| Component | Key Props | 용도 |
|-----------|-----------|------|
| `TopNavigation` | — | 상단 내비게이션 바. `TopNavigationButton` 하위 |
| `BottomNavigation` | — | 하단 탭 바. `BottomNavigationItem` 하위 |
| `SectionHeader` | title | 섹션 헤더. `SectionHeaderNavigation`, `SectionHeaderNavigationButton` 하위 |
| `Pagination` | page, onChange, count | 페이지네이션. `PaginationField`, `PaginationSelect` 하위 |
| `PaginationDots` | count, current | 도트 인디케이터 |
| `PageCounter` | current, total | 페이지 카운터 텍스트 |
| `ProgressIndicator` | value, max | 선형 프로그레스 바 |
| `ProgressStepIndicator` | — | 단계별 인디케이터. `ProgressStepIndicatorItem` 하위 |
| `ProgressTracker` | — | 진행 트래커. `ProgressTrackerItem`, `ProgressTrackerLabelContent` 하위 |
| `Stepper` | value, onChange, min, max | 숫자 증감 스테퍼. `StepperItem` 하위 |

### Overlay & Dialog

| Component | Key Props | 용도 |
|-----------|-----------|------|
| `Modal` | open, onOpenChange | 모달 다이얼로그. `ModalTrigger`, `ModalContainer`, `ModalDimmer`, `ModalContent`, `ModalHeading`, `ModalDescription`, `ModalClose`, `ModalNavigation`, `ModalNavigationButton`, `ModalSummary`, `ModalContentItem` 하위 |
| `Alert` | open, onOpenChange | 경고/확인 다이얼로그. `AlertTrigger`, `AlertContainer`, `AlertDimmer`, `AlertContent`, `AlertHeading`, `AlertDescription`, `AlertActionArea`, `AlertActionAreaButton` 하위 |
| `Popover` | open, onOpenChange | 팝오버. `PopoverTrigger`, `PopoverContent` 하위 |
| `Popper` | — | 저수준 포지셔닝. `PopperAnchor`, `PopperContent`, `PopperArrow` 하위 |
| `Menu` | — | 드롭다운 메뉴. `MenuTrigger`, `MenuContent`, `MenuList`, `MenuItem`, `MenuItemContent`, `MenuGroup`, `MenuActionArea`, `MenuActionAreaContent` 하위 |
| `Tooltip` | — | 툴팁. `TooltipTrigger`, `TooltipContent`, `TooltipGroup` 하위 |
| `Toast` | — | 토스트 알림. `ToastContainer`, `ToastContent`, `ToastIcon` 하위 |
| `Snackbar` | — | 스낵바. `SnackbarContent`, `SnackbarHeading`, `SnackbarDescription`, `SnackbarAction`, `SnackbarCloseButton`, `SnackbarExtraContent` 하위 |

### Display & Content

| Component | Key Props | 용도 |
|-----------|-----------|------|
| `Typography` | variant, weight, color, as | 텍스트 렌더링 (variant 목록은 아래 Typography Variants 참조) |
| `Label` | — | 라벨 텍스트 |
| `Avatar` | src, size, fallback | 아바타 이미지 |
| `AvatarButton` | src, size, onClick | 클릭 가능한 아바타 |
| `AvatarGroup` | max | 아바타 그룹 (겹치기) |
| `Chip` | variant, selected, onClick | 칩/태그 |
| `ContentBadge` | — | 콘텐츠 뱃지 |
| `PlayBadge` | — | 재생 뱃지 |
| `PushBadge` | count | 알림 뱃지 |
| `Thumbnail` | src, size, ratio | 썸네일 이미지. `ThumbnailSkeleton` 로딩 상태 |
| `Skeleton` | variant, width, height | 로딩 스켈레톤 |
| `Loading` | size | 로딩 스피너 |
| `SegmentedControl` | value, onChange | 세그먼트 컨트롤. `SegmentedControlItem` 하위 |
| `FallbackView` | — | 빈 상태/에러 뷰. `FallbackViewImage`, `FallbackViewContent`, `FallbackViewText`, `FallbackViewButton` 하위 |
| `SectionMessage` | variant | 섹션 메시지 (info, success, warning, error) |
| `CheckMark` | checked | 체크마크 아이콘 |
| `ToggleIcon` | checked, onChange | 토글 가능한 아이콘 (좋아요 등) |

### Utility

| Component | Key Props | 용도 |
|-----------|-----------|------|
| `ThemeProvider` | enableDarkMode, storageKey | 테마 프로바이더 (앱 루트에 1회) |
| `Portal` | container | 포탈 렌더링 |
| `DismissableLayer` | onDismiss | 외부 클릭 감지 래퍼 |
| `FocusScope` | trapped, loop | 포커스 트랩 |
| `AnimationPresence` | — | 진입/퇴장 애니메이션 래퍼 |
| `RemoveScroll` | — | 스크롤 잠금 |
| `NoSsr` | — | SSR 비활성화 래퍼 |
| `RegionConfig` | — | 알림 영역 설정 |
| `WithInteraction` | — | 인터랙션 상태 래퍼 (hover, press 등) |
| `ActionArea` | — | 클릭 가능 영역. `ActionAreaButton` 하위 |

---

## Hooks

| Hook | 용도 |
|------|------|
| `useAlert()` | Alert 다이얼로그를 명령형으로 열기 |
| `useSnackbar()` | Snackbar를 명령형으로 표시 |
| `useToast()` | Toast를 명령형으로 표시 |
| `useThemeControl()` | 테마 전환 (라이트/다크) |
| `useMediaQuery(query)` | 미디어 쿼리 매칭 |
| `useSize(ref)` | 요소 크기 측정 |
| `useAnimationPresence()` | 애니메이션 진입/퇴장 상태 |
| `useTransitionStatus()` | 트랜지션 상태 추적 |
| `useTheme()` | 현재 테마 객체 접근 |
| `useRegionStore()` | 알림 영역 상태 관리 |

---

## Design Tokens

### Semantic Colors (라이트 / 다크)

**Primary**
| Token Path | Light | Dark |
|------------|-------|------|
| `semantic.primary.normal` | #0066FF | #3385FF |
| `semantic.primary.strong` | #005EEB | #1A75FF |
| `semantic.primary.heavy` | #0054D1 | #0066FF |

**Label (텍스트)**
| Token Path | Light | Dark |
|------------|-------|------|
| `semantic.label.normal` | #171719 | #F7F7F8 |
| `semantic.label.strong` | #000000 | #FFFFFF |
| `semantic.label.neutral` | #2E2F33 @ 88% | #F7F7F8 @ 88% |
| `semantic.label.alternative` | #37383C @ 61% | #F7F7F8 @ 61% |
| `semantic.label.assistive` | #37383C @ 28% | #F7F7F8 @ 28% |
| `semantic.label.disable` | #37383C @ 16% | #F7F7F8 @ 16% |

**Background**
| Token Path | Light | Dark |
|------------|-------|------|
| `semantic.background.normal.normal` | #FFFFFF | #1B1C1E |
| `semantic.background.normal.alternative` | #F7F7F8 | #0F0F10 |
| `semantic.background.elevated.normal` | #FFFFFF | #212225 |
| `semantic.background.elevated.alternative` | #F7F7F8 | #141415 |

**Status**
| Token Path | Light | Dark |
|------------|-------|------|
| `semantic.status.positive` | #00BF40 | #1ED45A |
| `semantic.status.cautionary` | #FF9200 | #FFA938 |
| `semantic.status.negative` | #FF4242 | #FF6363 |

**Line (보더)**
| Token Path | Light | Dark |
|------------|-------|------|
| `semantic.line.normal` | #E1E2E4 | #333438 |
| `semantic.line.neutral` | #EAEBEC | #2E2F33 |
| `semantic.line.alternative` | #F4F4F5 | #2E2F33 |

**Fill**
| Token Path | Light | Dark |
|------------|-------|------|
| `semantic.fill.normal` | CoolNeutral-50 @ 8% | CoolNeutral-50 @ 16% |
| `semantic.fill.strong` | CoolNeutral-50 @ 16% | CoolNeutral-50 @ 22% |
| `semantic.fill.alternative` | CoolNeutral-50 @ 5% | CoolNeutral-50 @ 8% |

**Interaction**
| Token Path | Light | Dark |
|------------|-------|------|
| `semantic.interaction.inactive` | #989BA2 | #5A5C63 |
| `semantic.interaction.disable` | #F4F4F5 | #2E2F33 |

### Atomic Colors

14개 컬러 계열, 각 11~18톤. 토큰: `atomic.{color}.{tone}`. CSS 변수: `--atomic-{color}-{tone}`.

| 계열 | 톤 범위 | 대표값 (50) |
|------|---------|-------------|
| blue | 10–99 | #0066FF |
| red | 10–99 | #FF4242 |
| green | 10–99 | #00BF40 |
| orange | 10–99 | #FF9200 |
| purple | 10–99 | #CB59FF |
| cyan | 10–99 | #00BDDE |
| pink | 10–99 | #F553DA |
| lime | 10–99 | #58CF04 |
| violet | 10–99 | #6541F2 |
| redOrange | 10–99 | #FF5E00 |
| lightBlue | 10–99 | #00AEFF |
| yellow | 10–99 | (amber 계열) |
| coolNeutral | 5–99 | #70737C |
| neutral | 5–99 | #737373 |
| common | 0, 100 | #000000, #FFFFFF |

### Typography Variants

`<Typography variant="body1" weight="regular">` 형태로 사용. weight: `"regular"` (400), `"medium"` (500), `"bold"` (600/700).

| Variant | Size | Line Height |
|---------|------|-------------|
| display1 | 56px (3.5rem) | 72px |
| display2 | 40px (2.5rem) | 52px |
| display3 | 36px (2.25rem) | 48px |
| title1 | 32px (2rem) | 44px |
| title2 | 28px (1.75rem) | 38px |
| title3 | 24px (1.5rem) | 32px |
| heading1 | 22px (1.375rem) | 30px |
| heading2 | 20px (1.25rem) | 28px |
| headline1 | 18px (1.125rem) | 26px |
| headline2 | 17px (1.0625rem) | 24px |
| body1 | 16px (1rem) | 24px |
| body1-reading | 16px (1rem) | 26px |
| body2 | 15px (0.9375rem) | 22px |
| body2-reading | 15px (0.9375rem) | 24px |
| label1 | 14px (0.875rem) | 20px |
| label1-reading | 14px (0.875rem) | 22px |
| label2 | 13px (0.8125rem) | 18px |
| caption1 | 12px (0.75rem) | 16px |
| caption2 | 11px (0.6875rem) | 14px |

### Spacing

21단계: 0, 0.5, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80 (px)

### Breakpoints

| Name | Min Width |
|------|-----------|
| xs | 0px |
| sm | 768px |
| md | 992px |
| lg | 1200px |
| xl | 1600px |

반응형 유틸: `respondUp('sm')`, `respondDown('md')`, `respondTo('sm', 'lg')`.

### Elevation (Shadow)

| Token | 용도 |
|-------|------|
| `elevation.shadow.normal.xsmall` | 미세한 그림자 |
| `elevation.shadow.normal.small` | 카드 기본 |
| `elevation.shadow.normal.medium` | 떠있는 카드 |
| `elevation.shadow.normal.large` | 팝오버/드롭다운 |
| `elevation.shadow.normal.xlarge` | 모달 |
| `elevation.shadow.drop.*` | filter: drop-shadow용 (xsmall~xlarge) |
| `elevation.shadow.spread.small` | 넓은 확산 그림자 |
| `elevation.shadow.spread.medium` | 큰 확산 그림자 |

### Opacity

15단계: 0, 0.05, 0.08, 0.12, 0.16, 0.22, 0.28, 0.35, 0.43, 0.52, 0.61, 0.74, 0.88, 0.97, 1

---

## Utility Functions

| Function | Import | 용도 |
|----------|--------|------|
| `getColorByToken(theme, token)` | `@montage-ui/engine` | 토큰 경로로 색상값 가져오기 |
| `addHexOpacity(hex, opacity)` | `@montage-ui/engine` | hex 색상에 opacity 추가 |
| `addOpacity(color, opacity)` | `@montage-ui/core` | 색상에 opacity 추가 |
| `typographyStyle(theme, variant, weight)` | `@montage-ui/core` | 타이포그래피 CSS 객체 |
| `ellipsisTypographyStyle(lines)` | `@montage-ui/core` | 말줄임 CSS |
| `containerStyle(maxWidth)` | `@montage-ui/core` | 컨테이너 CSS |
| `respondUp(breakpoint)` | `@montage-ui/core` | min-width 미디어쿼리 |
| `respondDown(breakpoint)` | `@montage-ui/core` | max-width 미디어쿼리 |
| `gradient(direction, ...stops)` | `@montage-ui/core` | 그라데이션 헬퍼 |

---

## Icons (@montage-ui/icon)

400+ 아이콘. `import { IconName } from '@montage-ui/icon'`으로 import.

네이밍 패턴: `Icon{Name}`, `Icon{Name}Fill`, `Icon{Name}Thick`

주요 카테고리:
- **Arrow/Navigation**: IconArrow, IconCaret, IconChevronBack, IconChevronForward, IconClose, IconMenu
- **Action**: IconSearch, IconFilter, IconSort, IconEdit, IconDelete, IconAdd, IconRemove, IconShare, IconCopy
- **Media**: IconCamera, IconImage, IconVideo, IconMicrophone, IconPlay, IconPause
- **Status**: IconCheck, IconAlert, IconInfo, IconSuccess, IconError, IconWarning
- **Social**: IconBell, IconMessage, IconChat, IconHeart, IconStar, IconBookmark
- **Commerce**: IconShoppingBag, IconProduct, IconDiscount, IconCoupon
- **Document**: IconFile, IconFolder, IconArchive, IconLink
- **Person**: IconPerson, IconGroup, IconProfile, IconSettings
- **Time**: IconCalendar, IconClock, IconHistory
