import { Typography, Card, CardThumbnail, CardTitle, CardCaption } from "@montage-ui/core";
import { IconChevronRight } from "@montage-ui/icon";
import { magazines } from "@/data/mock";

export default function FeaturedSection() {
  return (
    <section className="py-6">
      <FlexHeader title="지금 주목할 소식" />
      <div className="grid grid-cols-3 gap-4">
        {magazines.map((mag) => (
          <Card key={mag.id} platform="desktop" style={{ cursor: "pointer" }}>
            <CardThumbnail ratio="16:9">
              <img
                src={mag.imageUrl}
                alt={mag.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </CardThumbnail>
            <div className="p-3">
              <CardTitle variant="headline1" weight="bold">
                {mag.title}
              </CardTitle>
              <CardCaption variant="caption1" color="semantic.label.assistive" className="mt-1">
                {mag.subtitle}
              </CardCaption>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FlexHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <Typography variant="heading2" weight="bold">
        {title}
      </Typography>
      <div className="group flex items-center gap-0.5 cursor-pointer transition-colors">
        <Typography variant="caption1" color="semantic.label.assistive" className="group-hover:!text-[var(--semantic-label-alternative)] transition-colors">
          전체 보기
        </Typography>
        <IconChevronRight width={14} height={14} className="text-[var(--semantic-label-assistive)] group-hover:text-[var(--semantic-label-alternative)] transition-colors" />
      </div>
    </div>
  );
}
