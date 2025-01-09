import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { MotionAnimate } from "react-motion-animate";
import { useState } from "react";
import { servicesData } from "../../data/services";

export default function Services() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Услуги`
  });

  const uniqueCategories = [...new Set(servicesData?.map(item => item.title))];
  const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);

  return (
    <section>
      <MotionAnimate animation={'fade'}>
        <div className={cls.tabsBlock}>
          {uniqueCategories?.map((category, index) => {
            return (
              <div key={index} className={[cls.tabsBlock_item, selectedCategory === category && cls.selected].join(' ')} 
                onClick={() => setSelectedCategory(category)}>
                {category}
              </div>
            )
          })}
        </div>
        <div className={cls.servicesBlock}>
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