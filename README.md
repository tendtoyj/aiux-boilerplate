# AI-UX Boilerplate

AI-UX 수업용 프로토타입 boilerplate입니다. Fork하여 자신만의 입맛 프로필을 만들어보세요.

## 시작하기

### 1. 레포 Fork & Clone

GitHub에서 이 레포를 **Fork**한 후 로컬에 clone합니다.

```bash
git clone https://github.com/<내-아이디>/aiux-boilerplate.git
cd aiux-boilerplate
```

### 2. Node.js 설치 확인

Node.js **18 이상**이 필요합니다. 터미널에서 버전을 확인하세요.

```bash
node -v
```

Node.js가 없거나 버전이 낮으면 [nodejs.org](https://nodejs.org/)에서 LTS 버전을 설치하세요.

> nvm을 사용하는 경우 `nvm install` 만 실행하면 `.nvmrc`에 지정된 버전이 자동 설치됩니다.

### 3. 의존성 설치

```bash
npm install
```

### 4. API 키 설정

AI 기능을 사용하려면 API 키가 필요합니다.

```bash
cp .env.example .env.local
```

`.env.local` 파일을 열고, 사용할 AI 서비스의 키를 입력하세요. 하나만 있으면 됩니다.

| 서비스 | 환경변수 | 키 발급 |
|--------|---------|---------|
| OpenAI | `OPENAI_API_KEY` | [platform.openai.com](https://platform.openai.com/api-keys) |
| Google | `GOOGLE_GENERATIVE_AI_API_KEY` | [aistudio.google.com](https://aistudio.google.com/apikey) |
| Anthropic | `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com/) |

### 5. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 기술 스택

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Montage UI](https://montage-ui.com/)
- [Vercel AI SDK](https://sdk.vercel.ai/)
