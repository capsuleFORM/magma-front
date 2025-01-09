import { Link, useLocation } from "react-router-dom";
import cls from "./styles.module.scss";
//import { globalsData } from "../../data/globals";
import Logo from "../../assets/logo.svg?react";
import MenuBarsIcon from "../../assets/icons/menuBars.svg?react";
import { useEffect, useState } from "react";

export default function Header() {
  //const maxMobileWindowWidth = globalsData?.maxMobileWindowWidth || 1000;
  const location = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [location]);

  return (
    <header className={cls.header}>
      <div className={cls.content}>
        <Link to={'/'}>
          <Logo className={cls.logo} />
        </Link>
        <MenuBarsIcon onClick={() => setIsMenuOpened(!isMenuOpened)} className={[cls.menuBarsIcon, isMenuOpened && cls.animateToCross].join(' ')}/>
        <div className={[cls.menu, isMenuOpened && cls.opened].join(' ')}>
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
    </header>
  );
}