import { FlexBox, Typography, IconButton, Avatar, Divider } from "@montage-ui/core";
import { IconSearch, IconBell } from "@montage-ui/icon";

const menuItems = ["탐색", "나의 맛집", "매거진", "피드", "입맛 프로필", "더보기"];

export default function GlobalNavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-[1060px] mx-auto px-6">
        <FlexBox justifyContent="space-between" alignItems="center" style={{ height: 64 }}>
          {/* Left: Logo + Menu */}
          <FlexBox alignItems="center" gap={32}>
            <Typography variant="heading1" weight="bold" style={{ cursor: "pointer", letterSpacing: "-0.5px" }}>
              Match Table
            </Typography>
            <FlexBox alignItems="center" gap={24}>
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  variant="body1"
                  weight="medium"
                  color="semantic.label.assistive"
                  style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  {item}
                </Typography>
              ))}
            </FlexBox>
          </FlexBox>

          {/* Right: Icons + Avatar */}
          <FlexBox alignItems="center" gap={16}>
            <IconButton variant="normal" size="medium">
              <IconSearch />
            </IconButton>
            <IconButton variant="normal" size="medium">
              <IconBell />
            </IconButton>
            <Avatar size="small" variant="person" />
          </FlexBox>
        </FlexBox>
      </div>
      <Divider />
    </header>
  );
}
