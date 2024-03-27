import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../rocket/rocketSlice';
import Button from '../../UI/Button';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(getReservedRockets);
  const rocketStatus = useSelector(getRocketsStatus);

  useEffect(() => {
    dispatch(myReservedRockets());
  }, [rocketStatus, dispatch]);

  let renderReserved = '';
  if (rockets.length) {
    renderReserved = rockets.map((data) => (
      <li key={data.id} className='flex items-center gap-2 justify-between w-full p-2 border border-gray-400 '>
        <span>{data.rocket_name}</span>
        <Button title="Read more" path={data.wikipedia} target="_blanck"  />
      </li>
    ));
  }

  return (
    <div className='w-5/6 md:w-2/3 mx-auto container flex flex-col gap-6 min-h-screen mt-20'>
      <h1>Reserved Rockets</h1>
      <ul className='grid grid-cols-1 md:grid-cols-3 gap-0'>{renderReserved}</ul>
    </div>
  );
};

export default ProfilePage;
