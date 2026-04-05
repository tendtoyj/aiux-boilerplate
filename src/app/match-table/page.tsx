import { Card, CardThumbnail, CardTitle, CardCaption, ContentBadge } from "@montage-ui/core";
import GlobalNavBar from "@/components/gnb/GlobalNavBar";
import QuickMenu from "@/components/quick-menu/QuickMenu";
import CardCarousel from "@/components/carousel/CardCarousel";
import FeaturedSection from "@/components/featured/FeaturedSection";
import ThemeCardSection from "@/components/theme-cards/ThemeCardSection";
import NearbySection from "@/components/nearby/NearbySection";
import AppFooter from "@/components/footer/AppFooter";
import { trendingRestaurants, newRestaurants } from "@/data/mock";

export default function MatchTablePage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <GlobalNavBar />

      <main className="max-w-[1060px] mx-auto px-6">
        {/* Quick Menu Icons */}
        <QuickMenu />

        {/* Section: 지금 뜨는 맛집 */}
        <CardCarousel title="지금 뜨는 맛집">
          {trendingRestaurants.map((r) => (
            <div
              key={r.id}
              className="flex-shrink-0"
              style={{ width: 200, scrollSnapAlign: "start" }}
            >
              <Card platform="desktop" style={{ cursor: "pointer" }}>
                <CardThumbnail ratio="4:3">
                  <img
                    src={r.imageUrl}
                    alt={r.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  {r.discount && (
                    <div className="absolute top-2 left-2">
                      <ContentBadge size="small" variant="solid" color="accent" style={{ background: "none", color: "var(--semantic-inverse-label)" }}>
                        {r.discount}
                      </ContentBadge>
                    </div>
                  )}
                </CardThumbnail>
                <div className="p-3">
                  <CardTitle variant="body2" weight="bold">
                    {r.name}
                  </CardTitle>
                  <CardCaption variant="caption1" color="semantic.label.assistive" className="mt-1">
                    {r.category}
                  </CardCaption>
                  <CardCaption variant="caption2" color="semantic.label.assistive" className="mt-0.5">
                    {r.location}
                  </CardCaption>
                  <div className="mt-1.5">
                    <ContentBadge size="xsmall" variant="solid" color="accent" accentColor={r.matchScore >= 90 ? "atomic.green.60" : "atomic.purple.50"}>
                      입맛 매칭률 {r.matchScore}%
                    </ContentBadge>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </CardCarousel>

        {/* Section: 지금 주목할 소식 */}
        <FeaturedSection />

        {/* Section: 테마로 찾는 맛집 */}
        <ThemeCardSection />

        {/* Section: 내 주변 인기 맛집 */}
        <NearbySection />

        {/* Section: 요즘 뜨는 신상 맛집 */}
        <CardCarousel title="요즘 뜨는 신상 맛집">
          {newRestaurants.map((r) => (
            <div
              key={r.id}
              className="flex-shrink-0"
              style={{ width: 200, scrollSnapAlign: "start" }}
            >
              <Card platform="desktop" style={{ cursor: "pointer" }}>
                <CardThumbnail ratio="4:3">
                  <img
                    src={r.imageUrl}
                    alt={r.name}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  {r.discount && (
                    <div className="absolute top-2 left-2">
                      <ContentBadge size="small" variant="solid" color="accent" style={{ background: "none", color: "var(--semantic-inverse-label)" }}>
                        {r.discount}
                      </ContentBadge>
                    </div>
                  )}
                </CardThumbnail>
                <div className="p-3">
                  <CardTitle variant="body2" weight="bold">
                    {r.name}
                  </CardTitle>
                  <CardCaption variant="caption1" color="semantic.label.assistive" className="mt-1">
                    {r.category}
                  </CardCaption>
                  <CardCaption variant="caption2" color="semantic.label.assistive" className="mt-0.5">
                    {r.location}
                  </CardCaption>
                  <div className="mt-1.5">
                    <ContentBadge size="xsmall" variant="solid" color="accent" accentColor={r.matchScore >= 90 ? "atomic.green.60" : "atomic.purple.50"}>
                      입맛 매칭률 {r.matchScore}%
                    </ContentBadge>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </CardCarousel>
      </main>

      <AppFooter />
    </div>
  );
}
