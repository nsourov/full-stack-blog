import React, { useState, useEffect } from 'react';
import RichTextEditor from 'react-rte';
import 'react-tagsinput/react-tagsinput.css';
import propTypes from 'prop-types';
import { MailBox } from './style';

const Editor = ({ onChange, defaultTag, value }) => {
  const [state, setState] = useState(RichTextEditor.createEmptyValue());

  const onChanges = (value) => {
    setState(value);
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    if (value.length > 0) {
      setState(RichTextEditor.createValueFromString(value, "html"));
    }
  }, [value, defaultTag]);

  return (
    <MailBox>
      <div className="body">
        <div className="group">
          <RichTextEditor
            placeholder="Type your message..."
            value={state}
            onChange={onChanges}
            defaultValue={value}
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
