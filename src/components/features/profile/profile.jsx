import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  myReservedRockets,
  getReservedRockets,
  getRocketsStatus,
} from '../rocket/rocketSlice';

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
      <li key={data.id}>
        <span>{data.rocket_name}</span>

        <a href={data.wikipedia} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </li>
    ));
  }

  return (
    <div className='w-2/3 mx-auto container'>
      <h1>Reserved Rockets</h1>
      <ul>{renderReserved}</ul>
    </div>
  );
};

export default ProfilePage;
