import React, { use } from "react";

const tipsPromise = fetch(
  "https://gadening-community-server.vercel.app/gardenTips/trending"
).then((res) => res.json());
const TrendingTips = () => {
  const tips = use(tipsPromise);
  return (
    <div>
      <h3 className="text-3xl font-bold text-center">
        Trending <span className="text-secondary">Tips </span>
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 ">
        {tips.map((tip) => (
          <div
            key={tip._id}
            className="flex items-center bg-base-200 p-6 rounded-3xl border-2 border-accent-content w-md space-x-6"
          >
            <img src={tip.image} className="w-1/4 rounded-2xl" />
            {/* des */}
            <div>
              <p className="font-bold">{tip.title}</p>
              <p>
                <span className="font-bold">Total likes : </span>
                {tip.totalLiked}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTips;
