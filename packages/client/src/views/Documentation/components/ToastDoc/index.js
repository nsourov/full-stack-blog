import React from 'react';
import { Spinner, Toast, ToastBody, ToastHeader } from 'reactstrap';

import DocCard from '../DocCard';

const ToastDoc = () => {
  return (
    <DocCard title="toast" id="toast">
      {/** base toast */}
      <div>
        <div className="p-3 my-2 rounded">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a white background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a gridded background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 bg-primary my-2 rounded">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a primary background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 bg-secondary my-2 rounded">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a secondary background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 bg-success my-2 rounded">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a success background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 bg-danger my-2 rounded">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a danger background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 bg-warning my-2 rounded">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a warning background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 bg-info my-2 rounded">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on an info background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 bg-dark my-2 rounded">
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a dark background — check it out!
            </ToastBody>
          </Toast>
        </div>
        <div className="p-3 my-2 rounded" style={{ background: 'black' }}>
          <Toast>
            <ToastHeader>Toast Header</ToastHeader>
            <ToastBody>
              This is a toast on a black background — check it out!
            </ToastBody>
          </Toast>
        </div>
      </div>
      <hr />
      {/** with header icon toast */}
      <div>
        <Toast className="mb-2">
          <ToastHeader icon="primary">&nbsp;Toast Header</ToastHeader>
          <ToastBody>
            This is a toast with a primary icon — check it out!
          </ToastBody>
        </Toast>
        <Toast className="mb-2">
          <ToastHeader icon="secondary">&nbsp;Toast Header</ToastHeader>
          <ToastBody>
            This is a toast with a secondary icon — check it out!
          </ToastBody>
        </Toast>
        <Toast className="mb-2">
          <ToastHeader icon="success">&nbsp;Toast Header</ToastHeader>
          <ToastBody>
            This is a toast with a success icon — check it out!
          </ToastBody>
        </Toast>
        <Toast className="mb-2">
          <ToastHeader icon="danger">&nbsp;Toast Header</ToastHeader>
          <ToastBody>
            This is a toast with a danger icon — check it out!
          </ToastBody>
        </Toast>
        <Toast className="mb-2">
          <ToastHeader icon="warning">&nbsp;Toast Header</ToastHeader>
          <ToastBody>
            This is a toast with a warning icon — check it out!
          </ToastBody>
        </Toast>
        <Toast className="mb-2">
          <ToastHeader icon="info">&nbsp;Toast Header</ToastHeader>
          <ToastBody>
            This is a toast with an info icon — check it out!
          </ToastBody>
        </Toast>
        <Toast className="mb-2">
          <ToastHeader icon="light">&nbsp;Toast Header</ToastHeader>
          <ToastBody>
            This is a toast with a light icon — check it out!
          </ToastBody>
        </Toast>
        <Toast className="mb-2">
          <ToastHeader icon="dark">&nbsp;Toast Header</ToastHeader>
          <ToastBody>
            This is a toast with a dark icon — check it out!
          </ToastBody>
        </Toast>
        <Toast>
          <ToastHeader icon={<Spinner size="sm" children={''} />}>
            &nbsp;Toast Header
          </ToastHeader>
          <ToastBody>
            This is a toast with a custom icon — check it out!
          </ToastBody>
        </Toast>
      </div>
      <hr />
      <Toast className="mb-2">
        <div className="toast-header">
          <img src="..." className="rounded me-2" alt="toast" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">11 mins ago</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <ToastBody>
          This is a toast with a primary icon — check it out!
        </ToastBody>
      </Toast>
    </DocCard>
  );
};

export default ToastDoc;
