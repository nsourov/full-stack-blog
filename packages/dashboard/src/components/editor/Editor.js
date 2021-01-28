import React, { useState } from 'react';
import RichTextEditor from 'react-rte';
import 'react-tagsinput/react-tagsinput.css';
import propTypes from 'prop-types';
import { MailBox } from './style';

const Editor = ({ onChange, defaultTag, value }) => {
  const [state, setState] = useState({
    value: RichTextEditor.createValueFromString(value, 'html'),
    tags: defaultTag ? [defaultTag] : [],
  });

  const onChanges = value => {
    setState({ ...state, value });
    if (onChange) {
      onChange(value.toString('html'));
    }
  };

  return (
    <MailBox>
      <div className="body">
        <div className="group">
          <RichTextEditor
            placeholder="Type your message..."
            value={state.value}
            onChange={onChanges}
            defaultValue={state.value || value}
          />
        </div>
      </div>
    </MailBox>
  );
};

Editor.propTypes = {
  onChange: propTypes.func,
  onSend: propTypes.func,
  defaultTag: propTypes.string,
  replay: propTypes.bool,
  text: propTypes.bool,
};

export default Editor;
