import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useMetaTags } from "react-metatags-hook";
import { globalsData } from "../../data/globals";
import { projectsData } from "../../data/projects";
import { MotionAnimate } from "react-motion-animate";
import { useEffect, useState } from "react";

export default function Projects() {
  useMetaTags({
    title: `${globalsData?.siteTitlePrefix} Проекты`
  });

  const maxMobileWindowWidth = globalsData?.maxMobileWindowWidth || 1000;

  const uniqueCategories = [...new Set(projectsData?.map(item => item.stats.category))];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [isContentShowing, setIsContentShowing] = useState(true);

  const handleChangeCategory = (category) => {
    if (category !== selectedCategory) {
      setIsContentShowing(false);
      if (window.innerWidth < maxMobileWindowWidth) {
        const contentBlockElement = document.querySelector('#projectsBlock');
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
        <div id="projectsBlock" className={[cls.projects, isContentShowing && cls.showing].join(' ')}>
          {projectsData?.map((projectItem, index) => {
            if (projectItem.active && projectItem.stats.category === selectedCategory) {
              return (
                <Link key={index} className={[cls.projectCard, !projectItem.stats.year && cls.disabled].join(' ')} 
                  to={`/projects/${projectItem.id}`}>
                  <MotionAnimate animation={'fade'}>
                    <img title={projectItem.title} src={`/images/${projectItem.smallImage}`}/>
                    <MotionAnimate animation={'fadeInUp'}>
                      <div className={cls.projectCard_title}>
                        <span>
                          {projectItem.title}
                        </span>
                        <span>
                          {projectItem.stats.year ? projectItem.stats.year : 'SOON'}
                        </span>
                      </div>
                      <div className={cls.projectCard_subtitle}>
                        {projectItem.stats.category}
                      </div>
                    </MotionAnimate>
                  </MotionAnimate>
                </Link>
              )
            }
          })}
        </div>
      </MotionAnimate>
    </section>
  )
}