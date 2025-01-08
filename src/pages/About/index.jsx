import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { MotionAnimate } from "react-motion-animate";

export default function About() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} О бюро`
  });

  return (
    <section>
      <div className={cls.about}>
        <div className={cls.content}>
          <div className={cls.infoBlock}>
            <MotionAnimate animation={'fadeInUp'}>
              <h1>
                <span>MAGMA.</span>Architecture
              </h1>
            </MotionAnimate>
          </div>
          <div className={cls.infoBlock}>
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
      </div>
    </section>
  )
}