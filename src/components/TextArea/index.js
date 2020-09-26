import React, { useState } from 'react';

function TextArea({ value, onBlur }) {
  const [text, setText] = useState(value || '');
  return (
    <textarea
      style={{ resize: 'none', width: '100%' }}
      rows="5"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => onBlur(text)}
      autoFocus
    />
  );
}

export default TextArea;
