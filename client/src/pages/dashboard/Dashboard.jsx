import React, { use } from "react";
import { MdOutlinePersonPin } from "react-icons/md";
import { RiUserSharedFill } from "react-icons/ri";
import { Link, NavLink, useLoaderData } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { FaUser } from "react-icons/fa6";

const Dashboard = () => {
  const { user } = use(AuthContext);
  const tips = useLoaderData();
  const { email } = user;
  const date = new Date(user.metadata.creationTime);
  const onlyDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const myTips = tips.filter((tip) => tip.email == email);
  console.log(myTips);
  const easyTips = myTips.filter((tip) => tip.difficulty == "Easy");
  const mediumTips = myTips.filter((tip) => tip.difficulty == "Medium");
  const hardTips = myTips.filter((tip) => tip.difficulty == "Hard");

  console.log("easy", easyTips);
  console.log("hard", hardTips);

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-11 text-primary-content gap-4 ">
        {/* left */}
        <aside className="md:col-span-2 bg-secondary rounded-3xl p-5 ">
          <h3 className="font-semibold mb-4">Go to ..</h3>
          <div className=" text-lg flex flex-col gap-2 *:border-white *:border-2 *:hover:bg-base-200 *:rounded-2xl *:p-2">
            <NavLink to={"/share-tip"} className="flex items-center gap-2">
              <span>
                <RiUserSharedFill />
              </span>
              <span>Share Tip</span>
            </NavLink>
            <NavLink to={"/my-tips"} className="flex items-center gap-2">
              <span>
                <MdOutlinePersonPin />
              </span>
              <span> My Tips</span>
            </NavLink>
          </div>
        </aside>
        {/* middle */}
        <div className="col-span-6 bg-base-200 rounded-3xl p-5">
          <h2 className="text-3xl font-bold mb-5 text-center">Dashboard</h2>
          <div className="flex flex-col items-center justify-between">
            {/* stat container -1 */}
            <div>
              <div className="stats bg-accent border-base-300 border shadow-2xl">
                <div className="stat">
                  <div className="stat-title text-secondary">
                    Total shared tips
                  </div>
                  <div className="stat-value text-white">{myTips.length}</div>
                  <div className="stat-actions">
                    <Link to={"/share-tip"} className="btn btn-xs btn-success">
                      Add a tip
                    </Link>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title text-secondary">Member since</div>
                  <div className="font-semibold text-lg text-white">
                    {onlyDate}
                  </div>
                </div>
              </div>
            </div>

            {/* stat container -2 */}
            <div className="stats border-base-300 border-2 shadow-2xl mt-5">
              <div className="stat place-items-center">
                <div className="stat-title text-secondary-content">
                  Easy tips
                </div>
                <div className="stat-value">{easyTips.length}</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-secondary-content">
                  Medium tips
                </div>
                <div className="stat-value text-secondary">
                  {mediumTips.length}
                </div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-title text-secondary-content">
                  Hard tips
                </div>
                <div className="stat-value">{hardTips.length}</div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <aside className="md:col-span-3 bg-base-200 rounded-3xl  p-5 ">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaUser /> <span>User Information</span>
          </h3>
          <div className="divider divider-accent"></div>
          <div className="space-y-3 ">
            <div className="place-items-center">
              <img src={user.photoURL} alt="" className="max-w-full" />
            </div>
            <p>
              <span className="font-semibold">Name : </span>
              <span className="text-secondary-content">{user.displayName}</span>
            </p>
            <p>
              <span className="font-semibold">Email : </span>
              <span className="text-secondary-content">{user.email}</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
