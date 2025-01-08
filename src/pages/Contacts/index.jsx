import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { MotionAnimate } from "react-motion-animate";

export default function Contacts() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Контакты`
  });

  return (
    <section>
      <div className={cls.contacts}>
        <div className={cls.content}>
          <div className={cls.infoBlock}>
            <MotionAnimate animation={'fadeInUp'}>
              <h1>
                КОНТАКТЫ
              </h1>
            </MotionAnimate>
          </div>
          <MotionAnimate animation={'fade'}>
          <div className={cls.infoBlock}>
            <div className={cls.infoBlock_col}>
              <div className={cls.infoBlock_col_row}>
                <a href={`tel:${globalsData.contacts.phoneNumber}`}>
                  {globalsData.contacts.phoneTitle}
                </a>
              </div>
              <div className={cls.infoBlock_col_row}>
                <a href={`mailto:${globalsData.contacts.email}`}>
                  {globalsData.contacts.email}
                </a>
              </div>
            </div>
            <div className={cls.infoBlock_col}>
              <div className={cls.infoBlock_col_row}>
                {globalsData.contacts.address}
              </div>
              <div className={cls.infoBlock_col_row}>
                {globalsData.contacts.location}
              </div>
            </div>
          </div>
          </MotionAnimate>
        </div>
      </div>
    </section>
  )
}