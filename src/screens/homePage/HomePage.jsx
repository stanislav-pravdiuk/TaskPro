import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';

const HomePage = () => {
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
    <div>
      <Sidebar active={menuActive} onClick={handleOverlayClick} />
        <Header click={handleClick} />
    </div>
  );
};

export default HomePage;
