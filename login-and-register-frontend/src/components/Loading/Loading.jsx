import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// import './Loading.css';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
