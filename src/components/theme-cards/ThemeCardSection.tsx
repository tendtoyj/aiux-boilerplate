import Image from "next/image";
import { Typography, Card, CardThumbnail, CardTitle, CardCaption } from "@montage-ui/core";
import { IconChevronRight } from "@montage-ui/icon";
import { themeCategories } from "@/data/mock";

export default function ThemeCardSection() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-5">
        <Typography variant="heading2" weight="bold">
          테마로 찾는 맛집
        </Typography>
        <div className="group flex items-center gap-0.5 cursor-pointer transition-colors">
          <Typography variant="caption1" color="semantic.label.assistive" className="group-hover:!text-[var(--semantic-label-alternative)] transition-colors">
            전체 보기
          </Typography>
          <IconChevronRight width={14} height={14} className="text-[var(--semantic-label-assistive)] group-hover:text-[var(--semantic-label-alternative)] transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {themeCategories.map((theme) => (
          <Card key={theme.id} platform="desktop" style={{ cursor: "pointer" }}>
            <CardThumbnail ratio="3:2">
              <Image
                src={theme.imageUrl}
                alt={theme.label}
                width={400}
                height={260}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-full object-cover rounded-t-xl"
              />
            </CardThumbnail>
            <div className="p-3">
              <CardTitle variant="headline1" weight="bold">
                {theme.label}
              </CardTitle>
              <CardCaption variant="caption1" color="semantic.label.assistive" className="mt-1">
                {theme.description}
              </CardCaption>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
