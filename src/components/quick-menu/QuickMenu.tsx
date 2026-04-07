import Link from "next/link";
import Image from "next/image";
import { FlexBox, Typography } from "@montage-ui/core";
import { quickMenuItems } from "@/data/mock";
import finderIcon from "@/assets/finder.png";
import dnaIcon from "@/assets/dna.png";
import bookingIcon from "@/assets/booking.png";
import couponIcon from "@/assets/coupon.png";
import coffeeIcon from "@/assets/coffee.png";
import chartIcon from "@/assets/chart.png";
import favoriteIcon from "@/assets/favorite.png";
import magazineIcon from "@/assets/magazine.png";
import pencilIcon from "@/assets/pencil.png";
import type { StaticImageData } from "next/image";

const iconMap: Record<string, StaticImageData> = {
  finder: finderIcon,
  dna: dnaIcon,
  booking: bookingIcon,
  coupon: couponIcon,
  coffee: coffeeIcon,
  chart: chartIcon,
  favorite: favoriteIcon,
  magazine: magazineIcon,
  pencil: pencilIcon,
};

const tasteProfileHref = "/match-table/taste-profile";

export default function QuickMenu() {
  return (
    <section className="py-8">
      <FlexBox justifyContent="center" gap={4} flexWrap="wrap">
        {quickMenuItems.map((item) => {
          const content = (
            <div
              className="flex flex-col items-center gap-2 rounded-2xl px-4 py-3 cursor-pointer transition-colors hover:bg-gray-100"
              style={{ width: 100 }}
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={iconMap[item.icon]}
                  alt={item.label}
                  width={56}
                  height={56}
                />
              </div>
              <Typography variant="caption1" weight="medium" color="semantic.label.alternative" align="center">
                {item.label}
              </Typography>
            </div>
          );

          if (item.label === "입맛 분석") {
            return (
              <Link key={item.id} href={tasteProfileHref}>
                {content}
              </Link>
            );
          }

          return (
            <div key={item.id}>
              {content}
            </div>
          );
        })}
      </FlexBox>
    </section>
  );
}
