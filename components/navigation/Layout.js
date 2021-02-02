import { useState } from 'react';
import NavHeader from './NavHeader';
import SideNavigation from './SideNavigation';
import Footer from './Footer';
import {Backdrop} from '../shared_styled/SharedStyles';

const Layout =({children}) => {

  const [sideOpen, setSideOpen] = useState(false);
  
  const toggleSideNav = () => {
    setSideOpen(!sideOpen)
  };

  const closeSideNav = () => {
    setSideOpen(false);
  };

  let backdrop;
  if (sideOpen) {
    backdrop = <Backdrop click={closeSideNav}/>
  };

  return (
    <div>
      <NavHeader toggleSideNav={toggleSideNav}/>
      <SideNavigation open={sideOpen} click={closeSideNav}/>
      {backdrop}
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;