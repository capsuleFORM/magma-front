import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { MotionAnimate } from "react-motion-animate";
import ArdoLogo from "../../assets/partners/ardo.svg?react";
import CentrSvetLogo from "../../assets/partners/centrsvet.svg?react";
import FormLogo from "../../assets/partners/form.svg?react";
import HomeArtLogo from "../../assets/partners/homeart.svg?react";
import { Link } from "react-router-dom";

export default function About() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} О бюро`
  });

  return (
    <section>
      <div className={cls.about}>
        <div className={cls.content}>
          <div className={cls.infoRow}>
            <div className={cls.infoBlock}>
              <img src="/images/9s76dg7asdg87as6d78as6d.png" title="Основатель бюро" />
            </div>
            <div className={cls.infoBlock}>
              <MotionAnimate animation={'fadeInUp'}>
                <h1>
                  О БЮРО
                </h1>
              </MotionAnimate>
              <MotionAnimate animation={'fade'}>
                <img src="/images/9s76dg7asdg87as6d78as6d.png" className={cls.mobileMainImage} title="Основатель бюро" />
              </MotionAnimate>
              <MotionAnimate animation={'fade'}>
                <p>
                  <b>Magma Architecture</b> – бюро, ориентированное на изучение поэтического потенциала архитектуры и совершенство дизайна.
                </p>
                <p>
                  Мы гордимся прочностью, качеством и долговечностью наших профессиональных отношений со всеми участниками процесса.
                </p>
                <p>
                  Наш любознательный и исследовательский подход к каждому проекту, позволяет видеть весь спектр возможностей, 
                  доступных в процессе проектирования, генерировать идеи, которые наилучшим образом отвечают потребностям каждого проекта.
                </p>
                <p>
                  В процессе изучения желаний наших клиентов, условий среды проектирования и в рамках данного бюджета мы находим неизведанные решения, 
                  чтобы превзойти все ожидания.
                </p>
              </MotionAnimate>
            </div>
          </div>
          <div className={cls.infoRow}>
            {window.innerWidth < 900 ? (
              <div className={cls.partners}>
                <div className={cls.partners_row}>
                  <Link to="https://homeart.pro/" content="nofollow">
                    <HomeArtLogo className={[cls.partners_logoMobile, cls.homeArtLogo].join(' ')} />
                  </Link>
                  <Link to="https://form.moscow/" content="nofollow">
                    <FormLogo className={[cls.partners_logoMobile, cls.formLogo].join(' ')} />
                  </Link>
                </div>
                <div className={cls.partners_row}>
                  <Link to="https://www.centersvet.ru/" content="nofollow">
                    <CentrSvetLogo className={[cls.partners_logoMobile, cls.centrSvetLogo].join(' ')} />
                  </Link>
                  <Link to="https://www.studioardo.ru/" content="nofollow">
                    <ArdoLogo className={[cls.partners_logoMobile, cls.ardoLogo].join(' ')} />
                  </Link>
                </div>
              </div>
            ) : (
              <div className={cls.partners}>
                <Link to="https://www.studioardo.ru/" content="nofollow">
                  <ArdoLogo className={[cls.partners_logo, cls.ardoLogo].join(' ')} />
                </Link>
                <Link to="https://www.centersvet.ru/" content="nofollow">
                  <CentrSvetLogo className={[cls.partners_logo, cls.centrSvetLogo].join(' ')} />
                </Link>
                <Link to="https://form.moscow/" content="nofollow">
                  <FormLogo className={[cls.partners_logo, cls.formLogo].join(' ')} />
                </Link>
                <Link to="https://homeart.pro/" content="nofollow">
                  <HomeArtLogo className={[cls.partners_logo, cls.homeArtLogo].join(' ')} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}