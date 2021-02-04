import React from 'react';
import { Progress } from 'reactstrap';

import DocCard from '../DocCard';

const ProgressDoc = () => {
  return (
    <DocCard title="progress" id="progress">
      {/** simple progress */}
      <Progress value="0" className="mb-2" />
      <Progress value="30" className="mb-2" />
      <Progress value="50" className="mb-2" />
      <Progress value="70" className="mb-2" />
      <Progress value="100" className="mb-2" />
      <hr />
      {/** color variant of progress */}
      <Progress color="primary" value={2 * 5} className="mb-2" />
      <Progress color="secondary" value="30" className="mb-2" />
      <Progress color="success" value="50" className="mb-2" />
      <Progress color="danger" value="70" className="mb-2" />
      <Progress color="info" value="100" className="mb-2" />
      <hr />
      {/** multiple progress on single progress value */}
      <Progress multi>
        <Progress bar color="primary" value={2 * 5} />
        <Progress bar color="secondary" value="30" />
        <Progress bar color="success" value="50" />
        <Progress bar color="danger" value="70" />
        <Progress bar color="info" value="100" />
      </Progress>
      <hr />
      {/** show label on progress */}
      <Progress value="25" className="mb-2">
        25%
      </Progress>
      <Progress value={50} className="mb-2">
        1/2
      </Progress>
      <Progress value={75} className="mb-2">
        You're almost there!
      </Progress>
      <Progress color="success" value="100" className="mb-2">
        You did it!
      </Progress>
      <Progress multi>
        <Progress bar value="15">
          Meh
        </Progress>
        <Progress bar color="success" value="30">
          Wow!
        </Progress>
        <Progress bar color="info" value="25">
          Cool
        </Progress>
        <Progress bar color="warning" value="20">
          20%
        </Progress>
        <Progress bar color="danger" value="5">
          !!
        </Progress>
      </Progress>
      <hr />
      {/** striped progress */}
      <Progress striped value={2 * 5} className="mb-2" />
      <Progress striped color="success" value="25" className="mb-2" />
      <Progress striped color="info" value={50} className="mb-2" />
      <Progress striped color="warning" value={75} className="mb-2" />
      <Progress striped color="danger" value="100" className="mb-2" />
      <hr />
      {/** animated progress */}
      <Progress animated value={2 * 5} className="mb-2" />
      <Progress animated color="success" value="25" className="mb-2" />
      <Progress animated color="info" value={50} className="mb-2" />
      <Progress animated color="warning" value={75} className="mb-2" />
      <Progress animated color="danger" value="100" className="mb-2" />
    </DocCard>
  );
};

export default ProgressDoc;
