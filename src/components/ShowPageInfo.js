import React from 'react';
import { withRouter } from 'react-router-dom';

const ShowPageInfo = withRouter(({ history, location }) => {

  const goForward = () => {
    history.goForward();
  }

  const goBack = () => {
    history.goBack();
  }

  return (
    <div>
      <div>현재 위치: {location.pathname}</div>
      <button onClick={goBack}>Go Back</button> 
      <button onClick={goForward}>Go Forward</button>
    </div>
  );
});

export default ShowPageInfo;