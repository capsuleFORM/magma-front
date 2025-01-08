import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { globalsData } from "../../data/globals";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const maxMobileWindowWidth = globalsData?.maxMobileWindowWidth || 1000;

  const limitStringLength = (string = '') => {
    if (window.innerWidth < maxMobileWindowWidth) {
      return string.substring(0, 2);
    } else {
      return string;
    }
  }

  return (
    <footer className={cls.footer}>
      <div className={cls.content}>
        <div className={cls.copyrght}>
          © {currentYear} {globalsData?.copyright}
        </div>
        <div className={cls.socials}>
          {globalsData?.socials?.map((socialItem, index) => {
            return (
              <Link key={index} rel="nofollow" to={socialItem.link}>
                {limitStringLength(socialItem.title)}
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  );
}