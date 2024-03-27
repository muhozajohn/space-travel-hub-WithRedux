import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMissions,
  getMissionsError,
  getMissionsStatus,
  selectAllMissions,
  joinMission,
} from "./missionSlice";

import Button from "../../UI/Button";

const MissionPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector(selectAllMissions);
  const misssionsStatus = useSelector(getMissionsStatus);
  const error = useSelector(getMissionsError);
  const handleJoinMission = (id) => dispatch(joinMission(id));

  useEffect(() => {
    if (misssionsStatus === "idle") {
      dispatch(fetchMissions());
    }
  }, [misssionsStatus, dispatch]);

  const handleJoinMissions = (member) => {
    return member ? "leave mission" : "join mission";
  };
  const handleLeaveMission = (member) => {
    return member ? "Active member" : "Not Member";
  };
  let contentToDisplay = "";

  if (misssionsStatus === "loading") {
    contentToDisplay = <>loading ...</>;
  } else if (misssionsStatus === "succeeded") {
    contentToDisplay = missions.map((data) => (
      <tr
        key={data.mission_id}
        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-gray-400"
      >
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          {data.mission_name}
        </td>

        <td className="whitespace-nowrap px-6 py-4">
          {data?.description.slice(0, 10)}
        </td>

        <th
          scope="col"
          className="whitespace-nowrap px-6 py-4 flex items-center justify-between"
        >
          {data?.reserved ? (
            <Button
              title={`${handleLeaveMission(data.reserved)}`}
              click={() => handleJoinMission(data.mission_id)}
              styles={` uppercase bg-blue-600 border  border-red-300 text-white hover:bg-red-400 `}
            />
          ) : (
            <Button
              title={`${handleLeaveMission(data?.reserved)}`}
              click={() => handleJoinMission(data?.mission_id)}
              styles={` uppercase bg-red-400 border  border-red-300 text-white hover:bg-red-400 `}
            />
          )}

          {data.reserved ? (
            <Button
              title={`${handleJoinMissions(data.reserved)}`}
              click={() => handleJoinMission(data.mission_id)}
              styles={` uppercase bg-yellow-600 text-white`}
            />
          ) : (
            <Button
              title={`${handleJoinMissions(data.reserved)}`}
              click={() => handleJoinMission(data.mission_id)}
              styles={` uppercase bg-green-600 text-white`}
            />
          )}
        </th>
      </tr>
    ));
  } else if (misssionsStatus === "failed") {
    contentToDisplay = <p>{error}</p>;
  }
  return (
    <div className="container w-5/6 md:w-2/3 mx-auto mt-20  flex flex-col gap-4 min-h-screen">
      <h1 className="text-green-600 text-base font-medium capitalize ">
        mission page
      </h1>

      <div className="flex flex-col min-h-screen ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light cursor-pointer">
                <thead className="border-b font-medium dark:border-neutral-500 bg-black text-white">
                  <tr>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Mision Name
                    </th>
                    <th scope="col" className="whitespace-nowrap px-6 py-4">
                      Description
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 flex items-center justify-between"
                    >
                      <p>Status</p>
                      <p>Action</p>
                    </th>
                  </tr>
                </thead>
                <tbody>{contentToDisplay}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
