import Link from "next/link";
import { FlexBox, Typography, IconButton, Avatar, Divider } from "@montage-ui/core";
import { IconSearch, IconBell } from "@montage-ui/icon";

const menuItems = [
  { label: "탐색", href: "" },
  { label: "나의 맛집", href: "" },
  { label: "매거진", href: "" },
  { label: "피드", href: "" },
  { label: "입맛 프로필", href: "/match-table/taste-profile" },
  { label: "더보기", href: "" },
];

export default function GlobalNavBar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--semantic-background-transparent-alternative)] backdrop-blur-md">
      <div className="max-w-[1060px] mx-auto px-6">
        <FlexBox justifyContent="space-between" alignItems="center" style={{ height: 64 }}>
          {/* Left: Logo + Menu */}
          <FlexBox alignItems="center" gap={32}>
            <Link href="/match-table">
              <Typography variant="heading1" weight="bold" style={{ cursor: "pointer", letterSpacing: "-0.5px" }}>
                Match Table
              </Typography>
            </Link>
            <FlexBox alignItems="center" gap={24}>
              {menuItems.map((item) =>
                item.href ? (
                  <Link key={item.label} href={item.href}>
                    <Typography
                      variant="body1"
                      weight="medium"
                      color="semantic.label.assistive"
                      className="transition-colors duration-200 hover:!text-gray-800"
                      style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ) : (
                  <Typography
                    key={item.label}
                    variant="body1"
                    weight="medium"
                    color="semantic.label.assistive"
                    className="transition-colors duration-200 hover:!text-gray-800"
                    style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                  >
                    {item.label}
                  </Typography>
                )
              )}
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
