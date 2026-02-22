import Banner from "@/components/shared/Banner";
import Innovation from "@/components/webside/home/Innovation";
import JoinUs from "@/components/webside/home/JoinUs";
import NewsAndInsights from "@/components/webside/home/News&Insights";
import NewsTest from "@/components/webside/home/NewsTest";
import Technology from "@/components/webside/home/Technology";
import Technologys from "@/components/webside/home/Technologys";
import WhatWeare from "@/components/webside/home/WhatWeare";
import WhatWeDo from "@/components/webside/home/WhatWeDo";
import NewsCards from "@/components/webside/news/NewsCards";
import NewsHero from "@/components/webside/news/NewsHero";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <WhatWeDo />
      <NewsAndInsights />
       {/* <NewsTest /> */}
      <WhatWeare />
      {/* <JoinUs /> */}
      {/* <Innovation /> */}
      <Technology />
    </main>
  );
}
