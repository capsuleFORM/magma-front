import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { MotionAnimate } from "react-motion-animate";
import { useEffect, useState } from "react";
import { servicesData } from "../../data/services";

export default function Services() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Услуги`
  });

  const maxMobileWindowWidth = globalsData?.maxMobileWindowWidth || 1000;

  const uniqueCategories = [...new Set(servicesData?.map(item => item.title))];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isContentShowing, setIsContentShowing] = useState(true);

  const handleChangeCategory = (category) => {
    if (category !== selectedCategory) {
      setIsContentShowing(false);
      if (windowWidth < maxMobileWindowWidth) {
        const contentBlockElement = document.querySelector('#servicesBlock');
        const selectedCategoryElement = document.querySelector(`#categoryBlock_${category.replace(/\s+/g, '')}`);
        selectedCategoryElement.insertAdjacentElement('afterend', contentBlockElement);

        setTimeout(() => {
          setSelectedCategory(category);
          setIsContentShowing(true);
        }, 150)
      } else {
        setTimeout(() => {
          setSelectedCategory(category);
          setIsContentShowing(true);
        }, 250)
      }
      
    }
  };

  useEffect(() => {
    handleChangeCategory(uniqueCategories[0]);
  }, [])
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <MotionAnimate animation={'fade'}>
        <div className={cls.tabsBlock}>
          {uniqueCategories?.map((category, index) => {
            return (
              <div key={index} id={`categoryBlock_${category.replace(/\s+/g, '')}`} 
                className={[cls.tabsBlock_item, selectedCategory === category && cls.selected].join(' ')} 
                onClick={() => handleChangeCategory(category)}>
                <span>
                  {category}
                </span>
                <span>{selectedCategory === category ? '–' : '+'}</span>
              </div>
            )
          })}
        </div>
        <div id="servicesBlock" className={[cls.servicesBlock, isContentShowing && cls.showing].join(' ')}>
          {servicesData?.find(item => item.title === selectedCategory)?.sections?.map((sectionItem, index) => {
            return (
              <div key={index} className={cls.servicesBlock_item}>
                {sectionItem.title !== '' ? (
                  <div className={cls.servicesBlock_item_title}>
                    {sectionItem.title}
                  </div>
                ) : null}
                <div className={cls.servicesBlock_item_content} dangerouslySetInnerHTML={{ __html: sectionItem.html }} />
              </div>
            )
          })}
        </div>
      </MotionAnimate>
    </section>
  )
}