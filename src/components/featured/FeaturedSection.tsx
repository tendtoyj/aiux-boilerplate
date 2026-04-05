import { Typography, Card, CardThumbnail, CardTitle, CardCaption } from "@montage-ui/core";
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
      <div className="flex items-center gap-1">
        <Typography variant="caption1" color="semantic.label.assistive" style={{ cursor: "pointer" }}>
          전체 보기 &gt;
        </Typography>
      </div>
    </div>
  );
}
