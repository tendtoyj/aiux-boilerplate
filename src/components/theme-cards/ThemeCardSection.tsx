import { Typography, Card, CardThumbnail, CardTitle, CardCaption } from "@montage-ui/core";
import { themeCategories } from "@/data/mock";

export default function ThemeCardSection() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-5">
        <Typography variant="heading2" weight="bold">
          테마로 찾는 맛집
        </Typography>
        <Typography variant="caption1" color="semantic.label.assistive" style={{ cursor: "pointer" }}>
          전체 보기 &gt;
        </Typography>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {themeCategories.map((theme) => (
          <Card key={theme.id} platform="desktop" style={{ cursor: "pointer" }}>
            <CardThumbnail ratio="3:2">
              <img
                src={theme.imageUrl}
                alt={theme.label}
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
