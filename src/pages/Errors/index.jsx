import { Link, useRouteError } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import Logo from "../../assets/logo.svg?react";
import { globalsData } from "../../data/globals";
import { MotionAnimate } from "react-motion-animate";

export default function Errors() {
  let error = useRouteError();
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} ${error.status || 'Ошибка'}`
  });

  return (
    <section>
      <div className={cls.errorPage}>
        <MotionAnimate animation={'fade'}>
          <div className={cls.errorPage_block}>
            <Logo className={cls.logoSVG} />
            <h1>
              {error.status || 'Ошибка'}
            </h1>
            <h3>
              {error.status === 404 ? 'Запрошенная страница не найдена' : error.statusText ? error.statusText : 'Произошла внутренняя ошибка'}
            </h3>
            <Link to='/' className={cls.homeButton}>
              На главную
            </Link>
          </div>
        </MotionAnimate>
      </div>
    </section>
  );
}
