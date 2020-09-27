import React from 'react';
import { string, func } from 'prop-types';

function TextArea({ value, onChange }) {
  return (
    <textarea
      style={{ resize: 'none', width: '100%' }}
      rows="5"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

TextArea.propTypes = {
  value: string,
  onBlur: func
};

export default TextArea;
