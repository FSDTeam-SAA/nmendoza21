import Banner from "@/components/shared/Banner";
import WhatWeDo from "@/components/webside/home/WhatWeDo";
import WhatWeare from "@/components/webside/home/WhatWeare";
import Innovation from "@/components/webside/home/Innovation";
import NewsAndInsights from "@/components/webside/home/News&Insights";
import Technology from "@/components/webside/home/Technology";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <WhatWeDo />
      <WhatWeare />
      <Innovation />
      <NewsAndInsights />
      <Technology />
    </main>
  );
}
