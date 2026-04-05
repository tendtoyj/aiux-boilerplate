import { Typography, Divider, FlexBox } from "@montage-ui/core";

export default function AppFooter() {
  return (
    <footer className="bg-white mt-16">
      <Divider />
      <div className="max-w-[1060px] mx-auto px-6 py-10">
        <FlexBox justifyContent="space-between" alignItems="flex-start">
          {/* Left - Company Info */}
          <div>
            <Typography variant="heading2" weight="bold" className="mb-4">
              Match Table
            </Typography>
            <div className="space-y-1 mt-4">
              <Typography variant="caption2" color="semantic.label.assistive">
                (주)매치테이블 | 대표이사 홍길동
              </Typography>
              <Typography variant="caption2" color="semantic.label.assistive">
                서울특별시 강남구 테헤란로 123, 매치타워 7층
              </Typography>
              <Typography variant="caption2" color="semantic.label.assistive">
                사업자등록번호: 123-45-67890 | 통신판매업신고: 2026-서울강남-12345
              </Typography>
              <Typography variant="caption2" color="semantic.label.assistive">
                전화번호: 02-1234-5678
              </Typography>
            </div>
          </div>

          {/* Right - Links */}
          <FlexBox gap={32}>
            <div className="space-y-2">
              <Typography variant="caption1" weight="bold" className="mb-2">
                서비스
              </Typography>
              <div className="space-y-1.5 mt-2">
                {["기업소개", "광고문의", "고객센터"].map((link) => (
                  <Typography
                    key={link}
                    variant="caption1"
                    color="semantic.label.assistive"
                    display="block"
                    style={{ cursor: "pointer" }}
                  >
                    {link}
                  </Typography>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Typography variant="caption1" weight="bold" className="mb-2">
                약관
              </Typography>
              <div className="space-y-1.5 mt-2">
                {["이용약관", "개인정보처리방침", "블로그"].map((link) => (
                  <Typography
                    key={link}
                    variant="caption1"
                    color="semantic.label.assistive"
                    display="block"
                    style={{ cursor: "pointer" }}
                  >
                    {link}
                  </Typography>
                ))}
              </div>
            </div>
          </FlexBox>
        </FlexBox>

        <Divider className="my-6" />

        <Typography variant="caption2" color="semantic.label.assistive">
          &copy; 2026 Match Table. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}
