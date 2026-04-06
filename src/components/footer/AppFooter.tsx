import { Typography, Divider } from "@montage-ui/core";

export default function AppFooter() {
  return (
    <footer className="bg-white mt-16">
      <Divider />
      <div className="max-w-[1060px] mx-auto px-6 py-10">
        <div>
          <Typography variant="heading2" weight="bold" className="mb-4">
            Match Table
          </Typography>
          <div className="flex flex-col gap-1 mt-4">
            <Typography variant="caption2" color="semantic.label.assistive" display="block">
              (주)매치테이블 | 대표이사 홍길동
            </Typography>
            <Typography variant="caption2" color="semantic.label.assistive" display="block">
              서울특별시 강남구 테헤란로 123, 매치타워 7층
            </Typography>
            <Typography variant="caption2" color="semantic.label.assistive" display="block">
              사업자등록번호: 123-45-67890 | 통신판매업신고: 2026-서울강남-12345
            </Typography>
            <Typography variant="caption2" color="semantic.label.assistive" display="block">
              전화번호: 02-1234-5678
            </Typography>
          </div>
        </div>

        <div className="py-3">
          <Divider color="semantic.line.normal.alternative" />
        </div>

        <Typography variant="caption2" color="semantic.label.assistive">
          &copy; 2026 Match Table. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}
