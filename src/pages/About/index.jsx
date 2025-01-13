import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { MotionAnimate } from "react-motion-animate";
import ArdoLogo from "../../assets/partners/ardo.svg?react";
import CentrSvetLogo from "../../assets/partners/centrsvet.svg?react";
import FormLogo from "../../assets/partners/form.svg?react";
import HomeArtLogo from "../../assets/partners/homeart.svg?react";

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
                  <HomeArtLogo className={[cls.partners_logoMobile, cls.homeArtLogo].join(' ')} />
                  <FormLogo className={[cls.partners_logoMobile, cls.formLogo].join(' ')} />
                </div>
                <div className={cls.partners_row}>
                  <CentrSvetLogo className={[cls.partners_logoMobile, cls.centrSvetLogo].join(' ')} />
                  <ArdoLogo className={[cls.partners_logoMobile, cls.ardoLogo].join(' ')} />
                </div>
              </div>
            ) : (
              <div className={cls.partners}>
                <ArdoLogo className={[cls.partners_logo, cls.ardoLogo].join(' ')} />
                <CentrSvetLogo className={[cls.partners_logo, cls.centrSvetLogo].join(' ')} />
                <FormLogo className={[cls.partners_logo, cls.formLogo].join(' ')} />
                <HomeArtLogo className={[cls.partners_logo, cls.homeArtLogo].join(' ')} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}