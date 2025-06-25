import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SingleTip from "../components/single-tip/SingleTip";
import { Fade } from "react-awesome-reveal";

const BrowseTips = () => {
  const tips = useLoaderData();
  const initialTips = tips.filter((tip) => tip.availability == "Public");
  const [showTips, setShowTips] = useState(initialTips);

  const handleEasy = () => {
    const currentTips = initialTips.filter((tip) => tip.difficulty == "Easy");
    setShowTips(currentTips);
  };

  const handleMedium = () => {
    const currentTips = initialTips.filter((tip) => tip.difficulty == "Medium");
    setShowTips(currentTips);
  };

  const handleHard = () => {
    const currentTips = initialTips.filter((tip) => tip.difficulty == "Hard");
    setShowTips(currentTips);
  };

  return (
    <div className="text-primary-content my-10">
      <Fade delay={1e3}>
        <h3 className="text-3xl text-center mt-10 font-bold">All tips </h3>
      </Fade>
      <div className="dropdown dropdown-hover flex flex-row-reverse ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 border border-accent-content text-primary-content bg-base-300"
        >
          Filter
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm *:hover:bg-secondary"
        >
          <li>
            <a onClick={handleEasy}>Easy</a>
          </li>
          <li>
            <a onClick={handleMedium}>Medium</a>
          </li>
          <li>
            <a onClick={handleHard}>Hard</a>
          </li>
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead className="text-secondary-content">
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {showTips.map((tip, index) => (
              <SingleTip key={tip._id} tip={tip} index={index}></SingleTip>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
