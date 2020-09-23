import React from 'react';
import { func, element } from 'prop-types';

function HeaderIcon({ children, onIconClick }) {
  return (
    <span className="header__icon" style={{ cursor: 'pointer' }} onClick={onIconClick}>
      {children}
    </span>
  );
}

HeaderIcon.propTypes = {
  onIconClick: func,
  children: element
};

export default HeaderIcon;
