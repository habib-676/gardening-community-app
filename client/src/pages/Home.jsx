import React from "react";
import Slider from "../components/slider/Slider";
import Featured from "../components/Featured";
import TrendingTips from "../components/trending-tips/TrendingTips";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Promotion from "../components/promotional/Promotion";

const Home = () => {
  return (
    <div className="text-primary-content space-y-20">
      <section>
        <Slider></Slider>
      </section>
      <section>
        <Featured></Featured>
      </section>
      <section>
        <TrendingTips></TrendingTips>
      </section>
      <section>
        <Stats></Stats>
      </section>
      <section>
        <Faq></Faq>
      </section>
      <section className="my-10">
        <Promotion/>
      </section>
    </div>
  );
};

export default Home;
