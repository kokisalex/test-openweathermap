import React from 'react';

export default function Loader(props) {
  const {
    progress
  } = props;

  return (
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={progress}
           aria-valuemin="0" aria-valuemax="100" style={{width: progress + '%'}}></div>
    </div>
  );
}