import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

const SidebarLink = ({ title, icon, newLink, route, onClick }) => (
  <NavLink to={route} onClick={onClick} activeClassName="sidebar__link-active">
    <li className="sidebar__link">
      {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
      <p className="sidebar__link-title">
        {title}
        {newLink ? (
          <Badge className="sidebar__link-badge">
            <span>New</span>
          </Badge>
        ) : (
          ''
        )}
      </p>
    </li>
  </NavLink>
);

SidebarLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  newLink: PropTypes.bool,
  route: PropTypes.string,
  onClick: PropTypes.func
};

SidebarLink.defaultProps = {
  icon: '',
  newLink: false,
  route: '/',
  onClick: () => {}
};

export default SidebarLink;
