import { FlexBox, Typography } from "@montage-ui/core";
import {
  IconSearch,
  IconStarFill,
  IconPencil,
  IconCalendar,
  IconList,
  IconLikeFill,
  IconTag,
  IconBookmarkFill,
  IconLocationFill,
  IconCoffeeFill,
} from "@montage-ui/icon";
import { quickMenuItems } from "@/data/mock";

const iconMap: Record<string, React.ReactNode> = {
  search: <IconSearch width={28} height={28} />,
  star: <IconStarFill width={28} height={28} />,
  pencil: <IconPencil width={28} height={28} />,
  calendar: <IconCalendar width={28} height={28} />,
  list: <IconList width={28} height={28} />,
  like: <IconLikeFill width={28} height={28} />,
  tag: <IconTag width={28} height={28} />,
  bookmark: <IconBookmarkFill width={28} height={28} />,
  location: <IconLocationFill width={28} height={28} />,
  coffee: <IconCoffeeFill width={28} height={28} />,
};

export default function QuickMenu() {
  return (
    <section className="py-8">
      <FlexBox justifyContent="center" gap={16} flexWrap="wrap">
        {quickMenuItems.map((item) => (
          <FlexBox
            key={item.id}
            flexDirection="column"
            alignItems="center"
            gap={8}
            style={{ width: 80, cursor: "pointer" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${item.color}15`, color: item.color }}
            >
              {iconMap[item.iconName]}
            </div>
            <Typography variant="caption1" weight="medium" color="semantic.label.assistive" align="center">
              {item.label}
            </Typography>
          </FlexBox>
        ))}
      </FlexBox>
    </section>
  );
}
