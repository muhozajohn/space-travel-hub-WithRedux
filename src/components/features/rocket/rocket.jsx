import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllRockets,
  getRocketsStatus,
  getRocketsError,
  fetchRockets,
} from './rocketSlice.jsx';

const RocketsIndex = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectAllRockets);
  const rocketStatus = useSelector(getRocketsStatus);
  const error = useSelector(getRocketsError);

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  let contentToDisplay = '';
  if (rocketStatus === 'loading') {
    contentToDisplay = <h2>Loading...</h2>;
  } else if (rocketStatus === 'succeeded') {
    contentToDisplay = rockets.map((data) => (
      <div key={data.id} className='p-4 shadow-md rounded-2xl  duration-150 scale-95 hover:scale-100 flex flex-col gap-2 '>
        <h2 className='text-lg font-medium text-green-600'>{data.rocket_name}</h2>
        <p>{data.description}</p>
        <hr />
      </div>
    ));
  } else if (rocketStatus === 'failed') {
    contentToDisplay = <p>{error}</p>;
  }

  return (
    <div className='container w-2/3  mx-auto  flex flex-col gap-9'>
      <h1 className='text-green-600 text-2xl font-medium capitalize '>Rockets page</h1>
    <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {contentToDisplay}
    </div>
    </div>
  );
};

export default RocketsIndex;