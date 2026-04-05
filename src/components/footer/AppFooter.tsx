import { Typography, Divider, FlexBox } from "@montage-ui/core";

const navLinks = [
  "기업소개",
  "광고문의",
  "고객센터",
  "이용약관",
  "블로그",
  "개인정보 처리방침",
];

const serviceLinks = [
  "채용서비스 문의",
  "원티드스페이스 문의",
  "원티드긱스 문의",
  "프리온보딩 문의",
  "취업지원시스템 문의",
  "IR 문의",
];

function WantedLogo() {
  return (
    <svg
      width="110"
      height="22"
      viewBox="0 0 110 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.4 0C5.08 0 2.67 1.62 1.35 3.92L4.28 5.87C5.08 4.42 6.54 3.47 8.4 3.47C10.86 3.47 12.72 5.27 12.72 7.93V8.5H7.5C3.24 8.5 0.68 10.53 0.68 13.89C0.68 17.12 3.24 19.28 6.74 19.28C8.87 19.28 10.96 18.46 12.39 16.83L12.72 18.92H16.29V7.93C16.29 3.24 13.03 0 8.4 0ZM7.27 16.09C5.41 16.09 4.21 15.07 4.21 13.68C4.21 12.22 5.27 11.34 7.67 11.34H12.72V12.72C12.72 14.85 10.4 16.09 7.27 16.09Z"
        fill="#258BF7"
      />
      <path
        d="M35.92 0.36L30.84 13.49L25.76 0.36H21.86L29.06 18.92H32.63L39.82 0.36H35.92Z"
        fill="#333333"
      />
      <path
        d="M55.95 0.36L50.87 13.49L45.79 0.36H41.89L49.09 18.92H52.66L59.85 0.36H55.95Z"
        fill="#333333"
      />
      <path
        d="M64.37 0.36V18.92H67.81V0.36H64.37Z"
        fill="#333333"
      />
      <path
        d="M80.31 0C75.48 0 71.78 3.77 71.78 9.64C71.78 15.51 75.48 19.28 80.31 19.28C82.57 19.28 84.56 18.33 85.96 16.83L86.29 18.92H89.86V0.36H86.29L85.96 2.45C84.56 0.95 82.57 0 80.31 0ZM80.84 3.47C83.77 3.47 86.29 5.67 86.29 9.64C86.29 13.62 83.77 15.81 80.84 15.81C77.91 15.81 75.39 13.62 75.39 9.64C75.39 5.67 77.91 3.47 80.84 3.47Z"
        fill="#333333"
      />
      <path
        d="M101.27 0C96.44 0 92.74 3.77 92.74 9.64C92.74 15.51 96.44 19.28 101.27 19.28C103.53 19.28 105.52 18.33 106.92 16.83L107.25 18.92H110V0.36H107.25L106.92 2.45C105.52 0.95 103.53 0 101.27 0ZM101.8 3.47C104.73 3.47 107.25 5.67 107.25 9.64C107.25 13.62 104.73 15.81 101.8 15.81C98.87 15.81 96.35 13.62 96.35 9.64C96.35 5.67 98.87 3.47 101.8 3.47Z"
        fill="#333333"
      />
    </svg>
  );
}

function SocialIcons() {
  return (
    <FlexBox alignItems="center" gap={16}>
      {/* Instagram */}
      <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
      {/* Facebook */}
      <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      {/* YouTube */}
      <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
      {/* Blog (Naver) */}
      <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
        </svg>
      </a>
      {/* Apple */}
      <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      </a>
      {/* Google Play */}
      <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.208 12l2.49-2.492zM5.864 2.658L16.8 9.49l-2.302 2.302-8.634-8.635z" />
        </svg>
      </a>
    </FlexBox>
  );
}

export default function AppFooter() {
  return (
    <footer className="bg-white mt-16">
      <Divider />
      <div className="max-w-[1060px] mx-auto px-6 pt-10 pb-8">
        {/* Top: Logo + Nav Links */}
        <FlexBox justifyContent="space-between" alignItems="center">
          <WantedLogo />
          <FlexBox alignItems="center" gap={28}>
            {navLinks.map((link) => (
              <Typography
                key={link}
                variant="caption1"
                weight={link === "개인정보 처리방침" ? "bold" : "medium"}
                color="semantic.label.normal"
                style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              >
                {link}
              </Typography>
            ))}
          </FlexBox>
        </FlexBox>

        <Divider className="my-6" />

        {/* Company Info */}
        <div className="space-y-1.5">
          <Typography variant="caption2" color="semantic.label.assistive">
            (주)원티드랩 &nbsp;|&nbsp; 대표이사 이복기
          </Typography>
          <Typography variant="caption2" color="semantic.label.assistive">
            서울특별시 송파구 올림픽로 300, 롯데월드타워 35층 &nbsp;|&nbsp;
            전화번호: 02-539-7118
          </Typography>
          <Typography variant="caption2" color="semantic.label.assistive">
            사업자등록번호: 299-86-00021 &nbsp;|&nbsp; 통신판매번호:
            2020-서울송파-3147 &nbsp;|&nbsp; 유료직업소개사업등록번호: (국내)
            제2020-3230259-14-5-00018호
          </Typography>
        </div>

        {/* Service Links */}
        <FlexBox alignItems="center" gap={24} className="mt-8">
          {serviceLinks.map((link, i) => (
            <Typography
              key={link}
              variant="caption2"
              weight="medium"
              color="semantic.label.normal"
              style={{ cursor: "pointer", whiteSpace: "nowrap" }}
            >
              {link}
              {i < serviceLinks.length - 1 && (
                <span className="ml-6 text-gray-200">|</span>
              )}
            </Typography>
          ))}
        </FlexBox>

        <Divider className="my-6" />

        {/* Bottom: Copyright + Social Icons */}
        <FlexBox justifyContent="space-between" alignItems="center">
          <Typography variant="caption2" color="semantic.label.assistive">
            &copy; 2026 Wanted Lab, Inc.
          </Typography>
          <SocialIcons />
        </FlexBox>
      </div>
    </footer>
  );
}
