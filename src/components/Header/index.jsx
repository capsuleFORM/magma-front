import { Link, useLocation } from "react-router-dom";
import cls from "./styles.module.scss";
import Logo from "../../assets/logo.svg?react";
import MenuBarsIcon from "../../assets/icons/menuBars.svg?react";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpened) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, [isMenuOpened]);

  const toggleMenu = () => {
    setIsMenuOpened(prev => !prev);
  };

  return (
    <header className={cls.header}>
      <div className={cls.content}>
        <Link to={'/'}>
          <Logo className={cls.logo} />
        </Link>
        <MenuBarsIcon onClick={() => toggleMenu()} className={[cls.menuBarsIcon, isMenuOpened && cls.animateToCross].join(' ')}/>
        <div className={[cls.menuBlock, isMenuOpened && cls.opened].join(' ')}>
          <div className={cls.menuBlock_content}>
            <Link to={'/projects'}>
              Проекты
            </Link>
            <Link to={'/about'}>
              О бюро
            </Link>
            <Link to={'/services'}>
              Услуги
            </Link>
            <Link to={'/contacts'}>
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}