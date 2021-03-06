import React from 'react';
import { Link } from 'react-router-dom';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';

const Topbar = props => {
  const { changeMobileSidebarVisibility, changeSidebarVisibility } = props;

  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <TopbarSidebarButton
            changeMobileSidebarVisibility={changeMobileSidebarVisibility}
            changeSidebarVisibility={changeSidebarVisibility}
          />
        </div>
        <div className="topbar__right">
          <TopbarProfile />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
