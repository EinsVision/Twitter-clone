import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon />
      <SidebarOption />
      {/* Button -> Tweet */}
    </div>
  )
}

export default Sidebar;
