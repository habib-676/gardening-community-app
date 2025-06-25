import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import MySingleTip from "../components/single-tip/MySingleTip";

const MyTips = () => {
  const { user } = use(AuthContext);
  const tips = useLoaderData();
  const { email } = user;

  const initialData = tips.filter((tip) => tip.email == email);
  const [myData, setMyData] = useState(initialData);

  return (
    <div className="text-primary-content my-10">
      <h3 className="text-center text-2xl mt-10 font-black">My tips page</h3>
      <div className="overflow-x-auto">
        <table className="table">
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
            {myData.map((myTip, index) => (
              <MySingleTip
                key={index}
                index={index}
                myTip={myTip}
                myData={myData}
                setMyData={setMyData}
              ></MySingleTip>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
