import React from 'react';

import DocCard from '../DocCard';

const TooltipDoc = () => {
  return (
    <DocCard title="tooltip" id="tooltip">
      <button
        type="button"
        className="btn btn-secondary me-2"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
      >
        Tooltip on top
      </button>
      <button
        type="button"
        className="btn btn-secondary me-2"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title="Tooltip on right"
      >
        Tooltip on right
      </button>
      <button
        type="button"
        className="btn btn-secondary me-2"
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Tooltip on bottom"
      >
        Tooltip on bottom
      </button>
      <button
        type="button"
        className="btn btn-secondary me-2"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Tooltip on left"
      >
        Tooltip on left
      </button>
    </DocCard>
  );
};

export default TooltipDoc;
