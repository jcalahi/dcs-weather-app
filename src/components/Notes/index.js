import React from 'react';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import Empty from '../Empty';

function Notes() {
  const notes = [];

  return (
    <>
      {notes.length === 0 ? (
        <Empty size="6x" text="No notes" icon={faFolderOpen} />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Notes;
