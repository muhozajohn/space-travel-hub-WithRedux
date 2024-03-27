import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
  fetchRockets,
  reserveRocket,
} from "./rocketSlice.jsx";
import Button from "../../UI/Button.jsx";

const RocketsIndex = ({ changeBg }) => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectAllRockets);
  const rocketStatus = useSelector(getRocketsStatus);
  const error = useSelector(getRocketsError);

  useEffect(() => {
    if (rocketStatus === "idle") {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  function displayReservedText(currState) {
    return currState ? "Cancel Reservation" : "Reserve Rockets";
  }

  function handleReserveRocket(id) {
    dispatch(reserveRocket(id));
  }

  let contentToDisplay = "";
  if (rocketStatus === "loading") {
    contentToDisplay = <h2>Loading...</h2>;
  } else if (rocketStatus === "succeeded") {
    contentToDisplay = rockets.map((data) => (
      <div
        className={` ${changeBg} flex flex-col md:flex-row gap-2 p-4 items-center w-full  shadow-sm rounded-2xl  duration-150 scale-95 hover:scale-100  bg-slate-200 `}
        key={data.id}
      >
        <div className="w-full md:w-[300px]">
          <img src={data?.flickr_images[0]} alt={data.rocket_name} />
        </div>
        <div className=" w-full flex flex-col gap-2 ">
          <h2 className="text-lg font-medium text-green-600">
            {data.rocket_name}
          </h2>
          <p className="">
            {data.reserved && (
              <span className=" mr-2 text-white px-2 py-1 rounded-md bg-green-600 ">
                Reserved
              </span>
            )}
            {data.description}
          </p>
          <Button
            title={`${displayReservedText(data.reserved)}`}
            click={() => handleReserveRocket(data.id)}
            type="button"
          />
          <hr className="text-gray-800 bg-slate-500" />
        </div>
      </div>
    ));
  } else if (rocketStatus === "failed") {
    contentToDisplay = <p>{error}</p>;
  }

  return (
    <div className="container w-5/6 md:w-2/3  mx-auto mt-20  flex flex-col gap-4 min-h-screen">
      <h1 className="text-green-600 text-base font-medium capitalize ">
        Rockets page
      </h1>
      <div className={`flex flex-col-reverse gap-3`}>
        {contentToDisplay}
      </div>
    </div>
  );
};

export default RocketsIndex;
