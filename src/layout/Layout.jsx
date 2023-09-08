import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';

const Layout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(true);
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setMenuActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <SideBar active={menuActive} onClick={handleOverlayClick} />
      <Header click={handleClick} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
