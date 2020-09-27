import React, { useState } from 'react';
import { string, func } from 'prop-types';

function TextArea({ value, onBlur }) {
  const [text, setText] = useState(value || '');
  return (
    <textarea
      style={{ resize: 'none', width: '100%' }}
      rows="5"
      value={value}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => onBlur(text)}
    />
  );
}

TextArea.propTypes = {
  value: string,
  onBlur: func
};

export default TextArea;
